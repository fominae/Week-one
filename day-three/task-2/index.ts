async function getDataFromApi(apiurl: string): Promise<any> {
    try {
        const response = await fetch(apiurl);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при загрузке данных", error);
        throw error;
    }
}

getDataFromApi("https://catfact.ninja/fact/")
    .then(data => {
        console.log("Данные успешно получены", data);
    })
    .catch(err => {
        console.error("Ошибка", err.message);
    });
