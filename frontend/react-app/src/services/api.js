const host = "http://localhost:8000";
const url = path => `${host}/${path}`;

const header = { 
    headers: {
        "Content-Type": "application/json",
    }
}
export const get = async path => {
    const resp = await fetch(url(path));
    const result = await resp.json();

    return result;
};

export const post = async (path, body) => {
    const options = { ...header, method: "POST", body: JSON.stringify(body)};
    const resp = await fetch(url(path+"/post"), options);
    const result = await resp.json();
    return result;
}

export const deleteRequest = async path => {
    const options = {...header, method: "DELETE"};

    await fetch(url(path), options);

    // 204 No Contentが帰ってくるので成功の場合は何もしない
    return;
}