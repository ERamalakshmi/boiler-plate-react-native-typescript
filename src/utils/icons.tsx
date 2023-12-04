import React from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

export interface IconProps {
  name: string;
  size: number;
  color: string;
  type: 'FontAwesome' | 'OctIcon' | 'Entypo' | 'Ionicons' | 'MaterialIcons' | 'MaterialCommunityIcons' | 'Foundation' | 'Feather' | "EvilIcons" | "AntDesign" | "SimpleLineIcons" | "Fontisto" 
}
const CustomIcon: React.FC<IconProps> = ({ name, size, color, type }) => {
  let IconComponent;

  switch (type) {
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'OctIcon':
      IconComponent = OctIcon;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'Foundation':
      IconComponent = Foundation;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'EvilIcons':
      IconComponent = EvilIcons;
      break;
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'SimpleLineIcons':
      IconComponent = SimpleLineIcons;
      break;
    case 'Fontisto':
      IconComponent = Fontisto;
      break;
    default:
      IconComponent = FontAwesome;
      break;
  }

  return (
    <View>
      <IconComponent name={name} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;

