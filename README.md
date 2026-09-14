# Portfolio CI/CD Pipeline

This repository is deployed using a self-hosted CI/CD pipeline that builds on every push to the `dev` branch and deploys automatically to a Kubernetes cluster. The setup combines GitHub, Cloudflare, a self-hosted Jenkins server, and a self-hosted Kubernetes cluster behind a MikroTik router.

## Architecture Overview

```
INTERNET
    |
    v
GitHub (dev branch)
    |  GitHub Webhook
    v
Cloudflare (DNS + Proxy + HTTPS)
    |
    v
Public IP
    |
    v
MikroTik (NAT / Firewall)
    |
    +-----------------------------+
    |                             |
    v                             v
Jenkins Server              K8s Ingress
(192.*.*.110)           (192.*.*.62)
    |                             |
    v                             v
Nginx (reverse proxy)      Ingress Controller
    |                             |
    v                             v
127.0.0.1:8080              portfolio Service
    |                             |
    v                             v
Jenkins                     Next.js Pods
    |
    | CI/CD Pipeline
    v
Docker Build --> Tests
    |
    v
Docker Hub (image registry)
    |
    | Image pulled via
    v
kubectl
    |
    v
Kubernetes API Server
    |
    | Auth via ServiceAccount: jenkins-deployer
    v
portfolio namespace
    |
    v
Deployment/portfolio
    |
    v
Next.js Pods (running application)

```

## How It Works

### 1. Source Control — GitHub
The application source code lives in a GitHub repository. All CI/CD activity is triggered from the `dev` branch.

### 2. Trigger — GitHub Webhook
A GitHub Webhook is configured on the repository. Every push to `dev` sends an HTTP POST notification to the Jenkins server, triggering a new pipeline run automatically (no manual builds needed).

### 3. Edge Layer — Cloudflare
Cloudflare sits in front of all public traffic and handles:
- DNS resolution for the domain(s) pointing at this infrastructure
- Reverse proxying to mask the origin IP
- HTTPS/TLS termination for secure connections

### 4. Network Entry — Public IP + MikroTik
Traffic reaches the network's public IP , where a MikroTik router performs NAT and firewall filtering, routing requests to the correct internal host based on destination port/rules:
- Webhook and Jenkins UI traffic → Jenkins Server
- Application traffic → K8s Ingress

### 5. CI Server — Jenkins
On Jenkins Server, an Nginx instance reverse-proxies incoming requests to Jenkins running locally on `127.0.0.1:8080`. Jenkins executes the CI/CD pipeline:

1. Docker Build — builds a new Docker image from the latest `dev` branch code
2. Tests — runs the test suite against the build
3. Push to Docker Hub — on success, the image is tagged and pushed to Docker Hub
4. Deploy via `kubectl` — Jenkins uses `kubectl` to apply the updated image to the cluster

### 6. Cluster Authentication — ServiceAccount
Jenkins authenticates to the Kubernetes API Server using a dedicated ServiceAccount, `jenkins-deployer`, scoped with just enough RBAC permissions to manage resources in the `portfolio` namespace. This avoids using cluster-admin credentials for automated deploys.

### 7. Deployment — Kubernetes
Within the `portfolio` namespace:
- The `Deployment/portfolio` resource is updated with the new image
- Kubernetes performs a rolling update of the Next.js Pods

### 8. Serving Traffic — Ingress
Once the new pods are healthy, live application traffic flows:

Internet → Cloudflare → MikroTik → K8s Ingress (192.*.*.62)
    → Ingress Controller → portfolio Service → Next.js Pods


## Summary Flow

| Stage | Component | Responsibility |

| 1 | GitHub (`dev`) | Source of truth for code |
| 2 | GitHub Webhook | Triggers pipeline on push |
| 3 | Cloudflare | DNS, proxy, HTTPS |
| 4 | MikroTik | NAT/firewall routing |
| 5 | Jenkins (via Nginx) | Build, test, push, deploy |
| 6 | Docker Hub | Image registry |
| 7 | K8s API + ServiceAccount | Authenticated deployment |
| 8 | Deployment/Pods | Runs the live app |
| 9 | Ingress + Service | Routes user traffic to pods |

## Key Design Points

- Fully automated: a push to `dev` is the only manual step required; everything downstream is automatic.
- Least-privilege deploys: the `jenkins-deployer` ServiceAccount is scoped to the `portfolio` namespace rather than using broad cluster credentials.
- Separation of concerns: Jenkins (192.*.*.110) and the Kubernetes Ingress (192.*.*.62) are separate hosts behind the same MikroTik gateway, split by internal routing rules.
- Edge protection: Cloudflare shields the origin IP and terminates HTTPS before traffic ever reaches the internal network.

## Possible Improvements

- Add a staging namespace/environment before promoting to production
- Add Slack/Discord notifications for build and deploy status
- Add rollback automation (`kubectl rollout undo`) on failed health checks
- Add image vulnerability scanning before the Docker Hub push step
- Add resource limits/requests and HPA (Horizontal Pod Autoscaler) for the `portfolio` Deployment