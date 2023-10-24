# This is repo to learn podman & newman collection of postman

## Podman

### What is podman?

* A technology similar to docker just there is no daemon

### How to install podman?

* Official doc link: [**https://podman.io/docs/installation**](https://podman.io/docs/installation)
* For some linux distros like fedora it is by default installed

### Podman commands to run the express app

```bash
# build the docker file
podman build -t myexpressapp . 

# run docker file
podman run -p 3000:3000 myexpressapp


# for deletion run
podman ps

# copy the container id & paste it in below command
podman kill <container-id>
```

### For newmann collection refer docs below

* **[https://www.npmjs.com/package/newman-collection](https://www.npmjs.com/package/newman-collection)**
