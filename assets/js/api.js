async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/CamiPeroto/Dio--Developer--Portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
