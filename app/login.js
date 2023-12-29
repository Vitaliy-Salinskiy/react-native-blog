import { Stack } from "expo-router"
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native"
import { Controller, useForm } from "react-hook-form"

import Input from "../components/ui/Input/Input.jsx"
import FormButton from "../components/ui/FromButton/FormButton.jsx"

import { images, icons } from "../constants/index.js"

const Login = () => {

	const { control, handleSubmit } = useForm({
		defaultValues: {
			username: "",
			password: "",
		}
	});

	const onSubmit = (data) => console.log(`Data:`, data);

	return (
		<ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1, width: "100%" }}>
			<View style={{ width: "100%", alignItems: "center" }}>
				<View style={{ width: "100%", height: 119, }}>
					<Image
						source={images.wave1}
						resizeMode="cover"
					/>
				</View>

				<Stack.Screen
					options={{
						headerShown: false
					}}
				/>

				<View style={{ marginTop: 25 }}>
					<View style={{ alignItems: "center", gap: 19 }}>
						<Text style={{ color: "#262626", fontSize: 64, fontWeight: 700, }}>Hello</Text>
						<Text style={{ color: "#262626", fontSize: 18, fontWeight: 400, }}>Sign in to your account</Text>
					</View>

					<View style={{ width: 300, marginTop: 41 }}>
						<View style={{ paddingBottom: 10, gap: 40, }}>
							<Controller
								control={control}
								name="username"
								rules={{
									required: "Username is required",
									minLength: {
										value: 4,
										message: "Username must be at least 8 characters long"
									},
									maxLength: {
										value: 20,
										message: "Username must not exceed 20 characters"
									}
								}}
								render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
									<View style={{ gap: 5 }}>
										<Input
											value={value}
											onBlur={onBlur}
											onChange={onChange}
											placeholder="Username"
											icon={icons.profile}
											type="text"
										/>
										{error && <Text style={{ color: "red", fontSize: 13, marginLeft: 5 }}>{error.message}</Text>}
									</View>
								)}
							/>
							<Controller
								control={control}
								name="password"
								rules={{
									required: "Password is required",
									minLength: {
										value: 4,
										message: "Password must be at least 8 characters long"
									},
									maxLength: {
										value: 20,
										message: "Password must not exceed 20 characters"
									}
								}}
								render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
									<View style={{ gap: 5 }}>
										<Input
											value={value}
											onBlur={onBlur}
											onChange={onChange}
											placeholder="Password"
											icon={icons.locker}
											type="text"
										/>
										{error && <Text style={{ color: "red", fontSize: 13, marginLeft: 5 }}>{error.message}</Text>}
									</View>
								)}
							/>
						</View>

						<TouchableOpacity style={{ alignItems: "flex-end", marginTop: 25 }}>
							<Text style={{ color: "#BEBEBE", fontSize: 15 }}>Forgot  your password?</Text>
						</TouchableOpacity>

						<View style={{ alignItems: "flex-end", marginTop: 75 }}>
							<FormButton label="Sign in" onPress={handleSubmit(onSubmit)} />
						</View>

						<TouchableOpacity style={{ marginTop: 75, alignItems: 'center', }}>
							<Text style={{ alignItems: "center", justifyContent: "center" }}>
								Don't have an account? {""}
								<Text style={{ textDecorationLine: "underline" }}>Create</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
			<View style={{ position: "absolute", bottom: 0, left: 0 }}>
				<Image
					source={images.wave2}
					resizeMode="cover"
				/>
			</View>
		</ScrollView >
	)
}

export default Login