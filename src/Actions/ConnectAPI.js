export const ConnectAPI = (API) => {

    return new Promise((fulfill, reject) => {

        const request = new XMLHttpRequest();
        request.open('GET', API);
        request.onload = () => {

            if (request.status === 200) {
                fulfill(JSON.parse(request.response));
            } else {

                reject('erro na coneção a base de dados');
            }
        };
        request.send();

    });
};


