# GUIDE KUBERNETES PTUT

# Instructions pour l'accès et la configuration Kubernetes

## Pré-requis

1. **Envoyer un mail à M. Singer** pour obtenir un identifiant et un mot de passe.

## Configuration Initiale

### Création du fichier de certificat

1. Créez un fichier nommé `cert` (**sans extension `.txt`**) dans votre répertoire de travail.
2. Ajoutez le contenu suivant dans le fichier `cert` :
    
    ```
    -----BEGIN CERTIFICATE-----
    MIIFBDCCAuygAwIBAgIBKjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZzb3ph
    ZHIwHhcNMjMxMjAxMTI1NDAxWhcNMzgxMTI3MTI1NDAxWjARMQ8wDQYDVQQDDAZz
    b3phZHIwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCCS0Qx1JWZw3l8
    CW1vcdCCCtImoqHa9UNu+/3vE5brquGkcb4cizVfKETQ4FFpGXJ1M2yPdz3Cwe9F
    ybvFe4+7zWzvoCiQwLRdZ0DObdaVqVunPabUd+cxS0c96b+hRTB/Glt9uoL+5pmW
    dqsFF6gOw8jFp7DQdT1dGo7Tr4Yq3UlJrF5kjHcB6pDCl2b+6zWdRlJEf+/lLxAY
    VyuTsHaqD35myGYgak/u3Ry1dAtC6A/JwOleM//Sw7H5kLNNHIALF74YYAxCh9kP
    CUGH9jPTJ0HENoE65gEw518C3AMS0l0bY77alKJIlE5Bc8vH6insf9Bsafypsm1+
    Bj4K5iucW7e5wjtDn4Ph3kLSmcHRQrQE3bqg/VshJrCIXM2ZLr0XJOSMVuQYDVTj
    3Wn09hDxs0tBcdQZBr+MnjQ2GqAHB36n1BKGRqQ9yBr5W8PNLNuXouuuYLAV4C/2
    JKR1L0E3XIfQnhTQhkGheF9XNlY6q6u/xcyKXgX6JWRYc/rAFUwIEL/qwrZ9eM53
    K+fNcjtua518VgKmDR5AJDKTQ3ZdNzKCfTrupKHlTQO0LE1WUiDU0HRl+UWXNSoE
    nNhmxB9usGLpwD8PDCb3WPmSUGgsr4XhBJYEmGNfIgTbXysy8upVH9mQ2BXfy0SK
    Vv/p2Dw3eHdRjPFYRG5j/V7DlA/FWwIDAQABo2cwZTAPBgNVHRMBAf8EBTADAQH/
    MA4GA1UdDwEB/wQEAwIBBjAdBgNVHQ4EFgQUjk4WaASyED8cMEuPNi7lOe6K8now
    IwYDVR0jBBwwGqEVpBMwETEPMA0GA1UEAwwGc296YWRyggEqMA0GCSqGSIb3DQEB
    CwUAA4ICAQByxGP75w50O/ZGJuJGUGb5AARtmelbsnG9G+LLURRN2nMe+EvZb6DT
    U8xD0bAxi+x+mHSA9x1eJ6sH+P8nbWqn07wQ39ToKU526SdWpJJIhXL40km/eyhK
    XWRD2MueDD8V49ZiPkWaqOdcFhmzWN3JBXT3+QYQMudDvn2O8bibzrlX33yHXnj2
    LYJeOJ6wahUmZUoU0EHPQlVRuF1AkNjw/D1ErVlmm/FTTevOJiFy46WCfxLDFZ1y
    P/C7X7cFefW8wsijh6pZbnSML/i01o3a+8FMuBGK3AdqStWLJHH0kvugfjyOEb7X
    ww8tisl/w+dN3it1LxZz8L2p8yC/pdjRwU09KCYNPRoPZL/aszVqjROWicjP4zZl
    I1OmsRSyiyMC/JPkFmSI5f71uFG79d5Tej0nXa/7zN8Lsl0Ly3orpcIGVxTnCSON
    /vgS4nAsVfT2LIpqalwUwPBmN8QFXDG6QIUcbQrAYo5edHsV8KeVKu5XakpMpelu
    2ScAreD78NCWXNPi/Aanm0L0IHQyhbwmkcHxac3n393eCz1UCojoorRnx/gAZk91
    ba1Ks1TaqODXeC5iToDYHaoZYuotxERwjSlBGMaU3CpH+pKTIticuvlV0zoz7oh2
    Iu9UV5ibdalOWr4feF1YefQ0SVPf1f51iJjAvkuFNdY6LpYeiBV7Ng==
    -----END CERTIFICATE-----
    ```
    

### Configuration de Kubernetes

1. Ouvrez **Git Bash** et placez-vous dans le même répertoire que le fichier `cert`.
2. Exécutez les commandes suivantes :
    
    ```bash
    kubectl config set-cluster isiscloud --server=https://sozadr.c1.bhs5.k8s.ovh.net --embed-certs=true --certificate-authority=cert
    kubectl config set-context oidc
    kubectl config set contexts.oidc.cluster isiscloud
    kubectl config set contexts.oidc.user oidc
    kubectl config use-context oidc
    ```
    

### Authentification

1. Authentifiez-vous avec la commande suivante :
    
    ```bash
    kubectl oidc-login setup \
        --oidc-issuer-url=https://keycloak.chl.connected-health.fr/realms/cluster-login2 \
        --oidc-client-id="cluster-login-auth" \
        --oidc-client-secret="sIc2nZYVCpL9s2QH4ntH3Y46Tmmw0z8B"
    ```
    
2. Utilisez les identifiants fournis par M. Singer pour vous connecter.
3. Exécutez les commandes suivantes pour configurer les informations d'identification :
    
    ```bash
    kubectl config set-credentials oidc \
        --exec-api-version=client.authentication.k8s.io/v1beta1 \
        --exec-command=kubectl \
        --exec-arg=oidc-login \
        --exec-arg=get-token \
        --exec-arg=--oidc-issuer-url=https://keycloak.chl.connected-health.fr/realms/cluster-login2 \
        --exec-arg=--oidc-client-id=cluster-login-auth \
        --exec-arg=--oidc-client-secret=sIc2nZYVCpL9s2QH4ntH3Y46Tmmw0z8B
    ```
    

### Accès à la base de données MySQL

1. Suivez le guide d'accès à la base de données MySQL : [Accès à la base de données](https://isiscloud.gitlab.io/documentation/user/acces-a-la-base-de-donnees.html).
2. Créez un fichier `database-secret.yaml` avec la commande suivante (remplacez `LOGIN` et `PASSWORD` par les informations fournies par M. Singer et n’hésitez pas a mettre des ‘ ’ autour du mdp) :
    
    ```bash
    kubectl create secret generic database-secret \
        --from-literal=login=LOGIN \
        --from-literal=password=PASSWORD \
        --dry-run=client -o yaml | kubeseal --format yaml > database-secret.yaml
    ```
    
3. Assurez-vous que le fichier `database-secret.yaml` ressemble à ceci :
    
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: database-secret
      namespace: contactflow
    type: Opaque
    data:
      login: Y29udGFjdGZsb3c=
      password: blabla
    ```
    

### Vérification de l'accès au cluster

1. Vérifiez que vous pouvez accéder au cluster en listant les pods dans votre namespace (remplacez `NAMESPACE` par sa valeur) :
    
    ```bash
    kubectl get pod -n NAMESPACE
    ```
    
2. Pour éviter de spécifier le namespace à chaque fois, configurez un namespace par défaut :
    
    ```bash
    kubectl config set-context --current --namespace=NAMESPACE
    ```
    

## Configuration des fichiers Docker et Kubernetes

### Fichiers Docker

### Backend

- **Dockerfile** (dans le répertoire `backend/`) :
    
    ```
    FROM openjdk:21-jdk-slim
    WORKDIR /app
    COPY target/*.jar app.jar
    EXPOSE 8989
    CMD ["java", "-jar", "app.jar"]
    ```
    

### Frontend

- **Dockerfile** (dans le répertoire `frontend/`) :
    
    ```
    FROM node:18-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm run build
    FROM nginx:1.21-alpine
    COPY --from=0 /app/target/dist /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    ```
    

### Fichiers Kubernetes

### Déploiements

- **backend-deployment.yaml** :
    
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: backend
      namespace: contactflow
      labels:
        app: backend
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: backend
      template:
        metadata:
          labels:
            app: backend
        spec:
          containers:
            - name: backend
              image: registry.gitlab.com/adechena/ptut-contactflow/backend:latest
              imagePullPolicy: Always
              ports:
                - containerPort: 8989
              env:
                - name: spring_datasource_username
                  valueFrom:
                    secretKeyRef:
                      name: database-secret
                      key: login
                - name: spring_datasource_password
                  valueFrom:
                    secretKeyRef:
                      name: database-secret
                      key: password
                - name: spring_datasource_url
                  value: jdbc:mysql://mysql.mysql.svc.cluster.local/contactflow
                - name: spring_jpa_properties_hibernate_dialect
                  value: org.hibernate.dialect.MySQLDialect
                - name: spring_jpa_hibernate_ddl-auto
                  value: update
    ```
    
- **frontend-deployment.yaml** :
    
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: frontend
      namespace: contactflow
      labels:
        app: frontend
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: frontend
      template:
        metadata:
          labels:
            app: frontend
        spec:
          containers:
            - name: frontend
              image: registry.gitlab.com/adechena/ptut-contactflow/frontend:latest
              imagePullPolicy: Always
              ports:
                - containerPort: 80
    ```
    

### Services

- **backend-service.yaml** :
    
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: backend-service
      namespace: contactflow
    spec:
      selector:
        app: backend
      ports:
        - protocol: TCP
          port: 8989
          targetPort: 8989
      type: ClusterIP
    ```
    
- **frontend-service.yaml** :
    
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: frontend-service
      namespace: contactflow
    spec:
      selector:
        app: frontend
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
      type: ClusterIP
    ```
    

### Ingress

- **ingress.yaml** (modifiez l'adresse dans `host/hosts` si nécessaire) :
    
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: contactflow-ingress
      namespace: contactflow
      annotations:
        cert-manager.io/cluster-issuer: letsencryptcluster
    spec:
      rules:
        - host: contactflow.chl.connected-health.fr
          http:
            paths:
              - path: /api
                pathType: Prefix
                backend:
                  service:
                    name: backend-service
                    port:
                      number: 8989
              - path: /rest
                pathType: Prefix
                backend:
                  service:
                    name: backend-service
                    port:
                      number: 8989
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: frontend-service
                    port:
                      number: 80
      tls:
        - hosts:
            - contactflow.chl.connected-health.fr
          secretName: keycloak-cert
    ```
    

### Secrets

- **secrets.yaml** (**attention**, ce fichier est généré par la commande “kubectl create secret etc” vous devez juste vérifier qu’il ressemble à celui là):
    
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: database-secret
      namespace: contactflow
    type: Opaque
    data:
      login: Y29udGFjdGZsb3c=
      password: blabla
    ```
    

## Pipelines CI/CD

### Fichier `.gitlab-ci.yml`

```yaml
stages:
  - test
  - build
  - package
  - release

variables:
  BACKEND_CONTAINER_IMAGE: registry.gitlab.com/adechena/ptut-contactflow/backend:latest
  FRONTEND_CONTAINER_IMAGE: registry.gitlab.com/adechena/ptut-contactflow/frontend:latest
  BACKEND_RELEASE_IMAGE: registry.gitlab.com/adechena/ptut-contactflow/backend:$CI_COMMIT_TAG
  FRONTEND_RELEASE_IMAGE: registry.gitlab.com/adechena/ptut-contactflow/frontend:$CI_COMMIT_TAG

test-backend:
  stage: test
  image: maven:latest
  script:
    - cd backend
    - mvn test
  artifacts:
    when: always
    reports:
      junit:
        - backend/target/surefire-reports/TEST-*.xml
        - backend/target/failsafe-reports/TEST-*.xml
  rules:
    - changes:
        - backend/**/*
        - .gitlab-ci.yml

test-frontend:
  stage: test
  image: node:18-alpine
  script:
    - echo "Pas de tests pour le frontend"
  rules:
    - changes:
        - frontend/**/*
        - .gitlab-ci.yml

build-backend:
  stage: build
  image: maven:latest
  script:
    - cd backend
    - mvn package -DskipTests
  artifacts:
    paths:
      - backend/target/*.jar
  rules:
    - changes:
        - backend/**/*
        - .gitlab-ci.yml

build-frontend:
  stage: build
  image: node:18-alpine
  script:
    - cd frontend
    - node --version
    - npm --version
    - npm install
    - npm run build
  artifacts:
    paths:
      - frontend/dist
  rules:
    - changes:
        - frontend/**/*
        - .gitlab-ci.yml

package-backend:
  stage: package
  image: docker:latest
  services:
    - docker:dind
  script:
    - cd backend
    - docker build -t $BACKEND_CONTAINER_IMAGE .
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker push $BACKEND_CONTAINER_IMAGE
  rules:
    - changes:
        - backend/**/*
        - .gitlab-ci.yml

package-frontend:
  stage: package
  image: docker:latest
  services:
    - docker:dind
  script:
    - cd frontend
    - docker build -t $FRONTEND_CONTAINER_IMAGE .
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker push $FRONTEND_CONTAINER_IMAGE
  rules:
    - changes:
        - frontend/**/*
        - .gitlab-ci.yml

release-backend:
  stage: release
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker pull $BACKEND_CONTAINER_IMAGE
    - docker tag $BACKEND_CONTAINER_IMAGE $BACKEND_RELEASE_IMAGE
    - docker push $BACKEND_RELEASE_IMAGE
  rules:
    - if: $CI_COMMIT_TAG
    - if: $CI_COMMIT_BRANCH == "deploiement"

release-frontend:
  stage: release
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker pull $FRONTEND_CONTAINER_IMAGE
    - docker tag $FRONTEND_CONTAINER_IMAGE $FRONTEND_RELEASE_IMAGE
    - docker push $FRONTEND_RELEASE_IMAGE
  rules:
    - if: $CI_COMMIT_TAG
    - if: $CI_COMMIT_BRANCH == "deploiement"

release:
  stage: release
  image: registry.gitlab.com/gitlab-org/release-cli:latest
  script:
    - echo "running release job"
  release:
    tag_name: '$CI_COMMIT_TAG'
    description: '## Images des conteneurs<br/>- Backend: $BACKEND_RELEASE_IMAGE<br/>- Frontend: $FRONTEND_RELEASE_IMAGE'
  rules:
    - if: $CI_COMMIT_TAG
    - if: $CI_COMMIT_BRANCH == "deploiement"
```

## Déploiement sur Kubernetes

1. Vérifiez d’être bien dans le même dossier que vos fichiers de deployment, services et ingress.
2. Appliquez les configurations Kubernetes :

```bash
kubectl apply -f database-secret.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f ingress.yaml
```

## Pour redémarrer le déploiement, supprimez les ressources existantes :

```bash
kubectl delete all --all -n contactflow
```

1. Supprimez les conteneurs dans **GitLab** sous **Container registry**.
2. Relancez les étapes de **Package** dans les pipelines GitLab.
3. Réappliquez les configurations Kubernetes.

## Test de l'application

1. Utilisez le port forwarding pour tester l'application (remplacez le nom du pod et le namespace) :
    
    ```bash
    kubectl port-forward pod/frontend-58ccfb5fcb-grmln 80:80 --namespace contactflow
    ```
    
    ```bash
    kubectl port-forward pod/backend-d4c5f587c-wcw66 8989:8989 --namespace contactflow
    ```
    
2. Accédez à l'application via `localhost:80` (frontend) ou `localhost:8989` (backend).
3. Regardez si le front s’affiche, pour le back il faut essayer des routes comme /api/prospects et voir si vous avez une erreur ou un json.
4. Initialisez la base de données MySQL avec **MySQL Workbench** en ajoutant les données nécessaires.