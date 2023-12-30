import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="home" options={{ headerShown: false }} />
			<Stack.Screen name="posts/saved" options={{ headerShown: false }} />
			<Stack.Screen name="register" options={{ headerShown: false }} />
			<Stack.Screen name="login" options={{ headerShown: false }} />
			<Stack.Screen name="posts/[id]" options={{ headerShown: false }} />
		</Stack>
	);
}

export default Layout;