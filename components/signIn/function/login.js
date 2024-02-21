import { loginDemoUser } from "../../../Redux/featuers/users/userSliceLogin"


export function signInDemoUser(dispatch, setToken, navigation) {

    dispatch(loginDemoUser(setToken))
        .then((result) => {
            if (result.payload) {
                // navigation?.goBack();
                navigation.navigate("HomePage", { screen: "HomePage" });
            }
        })
}
