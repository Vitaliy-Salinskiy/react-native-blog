import { TouchableOpacity, Text, Image, View } from "react-native"
import { icons } from "../../../constants"

const FormButton = ({ label, onPress }) => {
	return (
		<TouchableOpacity style={{ flexDirection: "row", gap: 10 }} onPress={onPress}>
			<Text style={{ color: "#262626", fontSize: 25, fontWeight: 700 }}>{label}</Text>
			<View style={{ width: 56, height: 34 }}>
				<Image
					source={icons.formButton}
					resizeMode="cover"
				/>
			</View>
		</TouchableOpacity>
	)
}

export default FormButton