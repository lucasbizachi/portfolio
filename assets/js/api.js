

async function fetchProfileData() {
    const url = 'https://avatars.githubusercontent.com/u/101759223?v=4';
    const fetching = await fetch(url)
    return await fetching.json()

}