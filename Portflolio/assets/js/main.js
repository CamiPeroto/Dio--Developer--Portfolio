function updateProfileInfo(profileData){
    document.getElementsByClassName('profile.photo')

}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    console.log(profileData)

})()