import { userRegister } from "../../Redux/featuers/users/registerUser";
import * as ImagePicker from 'expo-image-picker';
import { TYPE_DATA_UPLOAD_CLOUNDINARY, URL_DATA_UPLOAD_CLOUNDINARY } from '@env';



export function showAlert() {
    Alert.alert(
        "Permission Required",
        "Allow to access photos and media on your device?.",
        [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );
};


export async function pickImage(setLinkFileFoto) {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
        showAlert();
    }
    else {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
            base64: true
        });

        if (!result.cancelled) {
            // console.log(result.assets[0].base64)
            handleUpload(result.assets[0].base64, setLinkFileFoto);
        }
    }
};


export function handleUpload(image, setLinkFileFoto) {

    const data = new FormData();
    data.append('file', `data:image/;base64,${image}`);
    data.append('upload_preset', TYPE_DATA_UPLOAD_CLOUNDINARY); // Replace with your Cloudinary upload preset

    // console.log(data)

    fetch(URL_DATA_UPLOAD_CLOUNDINARY, {
        method: 'POST',
        body: data
    }).then(res => res.json()).
        then(data => {
            // console.log(data.secure_url)
            setLinkFileFoto(data.secure_url)
        })
}


export async function registerUser(validateForm,
    Login,
    Name,
    Password,
    Email,
    LinkFileFoto,
    gender,
    dispatch,
    navigation,
    setShowInfoHaveThisUserPopup,
    setLogin,
    setName,
    setPassword,
    setEmail,
    setLinkFileFoto,
    setMale,
    setFemale
) {
    if (validateForm()) {
        let user = {
            Login: Login,
            Name: Name,
            Password: Password,
            Email: Email,
            FotoUser: gender === "Male" && LinkFileFoto === "" ? "https://i.postimg.cc/NF66b95t/toppng-com-icons-logos-emojis-user-icon-png-transparent-2400x2305.png" :
                gender === "Female" && LinkFileFoto === "" ? "https://i.postimg.cc/MGJWJnGN/toppng-com-female-user-icon-600x601.png" : LinkFileFoto,
            UserTypeCode: "1",
            Gender: gender
        };

        dispatch(userRegister(user))
            .then(async (result) => {
                if (result.payload) {
                    setLogin("")
                    setName("")
                    setPassword("")
                    setEmail("")
                    setLinkFileFoto("")
                    setMale(false)
                    setFemale(false)
                    navigation.navigate("HomePage", { screen: "HomePage" });
                }
                else {
                    setShowInfoHaveThisUserPopup(true)
                }
            })
    }
}


export function validateEmailInput(email) {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}