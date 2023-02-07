async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/guilhermefn1011/Dio/main/JavaScript/Portfolio/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json()
}