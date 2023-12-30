import { View, Text, ScrollView, Image } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "expo-router";

import { icons, images } from "../constants";

import Input from "../components/ui/Input/Input";
import FormButton from "../components/ui/FromButton/FormButton";

const Register = () => {

	const router = useRouter();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			username: "",
			password: "",
			email: "",
			phoneNumber: ""
		}
	})

	const onSubmit = (data) => {
		console.log(`Data:`, data)
		router.push("/login")
	}

	return (
		<ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}>
			<View style={{ alignItems: "center" }}>
				<Image
					source={images.wave1}
					style={{ height: 119, transform: [{ translateX: -175 }] }}
				/>

				<View style={{ alignItems: "center", width: 300, zIndex: 2, marginBottom: 50 }}>
					<View>
						<Text style={{ color: "#262626", fontSize: 30, fontWeight: 700 }}>Create account</Text>
					</View>

					<View style={{ marginTop: 42, gap: 42 }}>

						<Controller
							control={control}
							name="username"
							rules={{
								required: "Username is required",
								minLength: {
									value: 4,
									message: "Username must be at least 4 characters long"
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
										error={error}
									/>
									{error && <Text style={{ color: "red" }}>{error.message}</Text>}
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
									message: "Password must be at least 4 characters long"
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
										type="password"
										error={error}
									/>
									{error && <Text style={{ color: "red" }}>{error.message}</Text>}
								</View>
							)}
						/>

						<Controller
							control={control}
							name="email"
							rules={{
								required: "Email is required",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Invalid email format"
								}
							}}
							render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
								<View style={{ gap: 5 }}>
									<Input
										value={value}
										onBlur={onBlur}
										onChange={onChange}
										placeholder="E-mail"
										icon={icons.email}
										type="email"
										keyboardType="email-address"
										error={error}
									/>
									{error && <Text style={{ color: "red" }}>{error.message}</Text>}
								</View>
							)}
						/>

						<Controller
							control={control}
							name="phoneNumber"
							rules={{
								required: "Phone number is required",
								pattern: {
									value: /^(\+\d{1,2}\s?)?1?\-?\.?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$|^\d{12}$/,
									message: "Invalid phone number format"
								}
							}}
							render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
								<View style={{ gap: 5 }}>
									<Input
										value={value}
										onBlur={onBlur}
										onChange={onChange}
										placeholder="Phone number"
										icon={icons.phone}
										type="number"
										keyboardType="number-pad"
										error={error}
									/>
									{error && <Text style={{ color: "red" }}>{error.message}</Text>}
								</View>
							)}
						/>

					</View>

					<View style={{ marginTop: 52, alignItems: "flex-end", width: "100%" }}>
						<FormButton label="Create" onPress={handleSubmit(onSubmit)} />
					</View>

					<View style={{ marginTop: 39, gap: 12, alignItems: "center" }}>
						<Text style={{ fontSize: 15, color: "#262626" }}>Or create account using social media</Text>
						<Image source={icons.social} width={43} height={432} />
					</View>
				</View>

			</View>

			<View style={{ position: "absolute", bottom: 0, left: 0 }}>
				<Image
					source={images.wave2}
					resizeMode="cover"
				/>
			</View>
		</ScrollView>
	)
}

export default Register 