import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack initialRouteName="login">
			<Stack.Screen name="home" />
			<Stack.Screen name="login" />
			<Stack.Screen name="register" />
		</Stack>
	);
}

export default Layout;