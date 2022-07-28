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

    checkError(resp.status);

    return result;
};

export const post = async (path, body) => {
    const options = { ...header, method: "POST", body: JSON.stringify(body)};
    const resp = await fetch(url(path+"/post"), options);

    checkError(resp.status);

    const result = await resp.json();
    return result;
}

export const deleteRequest = async path => {
    const options = {...header, method: "DELETE"};

    const resp = await fetch(url(path), options);

    checkError(resp.status)

    // 204 No Contentが帰ってくるので成功の場合は何もしない
    return;
}

const checkError = status => {
    if (status >= 400) {
        throw new Error("エラーが発生しました。時間を置いて再度お試しください")
    }
};