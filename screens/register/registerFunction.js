import { userRegister } from "../../Redux/featuers/users/registerUser";


export function registerUser(validateForm,
    Login,
    Name,
    Password,
    Email,
    LinkFileFoto,
    gender,
    dispatch,
    navigation,
    setShowInfoHaveThisUserPopup
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