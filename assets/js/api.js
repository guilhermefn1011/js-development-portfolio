async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/guilhermefn1011/js-development-portfolio/main/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json()
}