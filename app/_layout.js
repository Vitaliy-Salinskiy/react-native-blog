import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack initialRouteName="login">
			<Stack.Screen name="home" />
			<Stack.Screen name="login" options={{ headerShown: false }} />
			<Stack.Screen name="register" options={{ headerShown: false }} />
		</Stack>
	);
}

export default Layout;