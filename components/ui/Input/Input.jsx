import { Image, TextInput, View } from 'react-native';

import styles from './Input.style';

const Input = ({ placeholder, type, keyboardType, icon, iconSize, value, onBlur, onChange }) => {

	return (
		<View style={styles.input}>
			<View style={{ ...iconSize, justifyContent: "center", alignItems: "center" }}>
				<Image
					source={icon}
					resizeMode='contain'
				/>
			</View>
			<TextInput
				onBlur={onBlur}
				value={value}
				onChangeText={onChange}
				style={{ overflow: 'hidden', paddingRight: 28, width: "100%", height: "100%" }}
				placeholder={placeholder}
				secureTextEntry={type === "password" ? true : false}
				type={type ? type : "text"}
				keyboardType={keyboardType ? keyboardType : "default"}
			/>
		</View>
	);
};

export default Input;
