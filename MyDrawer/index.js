import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, navigation} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,  DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome"

import s from './style'
import BottomTabs from './BottomTabs'





function HomeScreen({ navigation }) {
  return (
    
    
      <View style={{ flex: 1, marginLeft: 25, marginTop:45}}>
       <Icon
       name="bars"
       size={25}
       color="indigo"
       onPress={() => navigation.openDrawer()}
      title="Go to notifications"
    />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('NotificationsScreen')}        
        title="Go to notifications"
      />
    </View>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function DrawerMenu(props){
  return(
    <TouchableOpacity>
      <View>
        
      <View  style={s.row}>
        <Icon 
        style={s.iconLeft}
        size={27} 
        color={'indigo'}
        name={props.iconName}
         />
          <Text style={s.tital}>{props.titleName}</Text>
        </View>
        </View>
        
    </TouchableOpacity>
    
    
  )
}

function Menu(props){
    return(
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image style={s.userImagen} source={ require('./logo.jpg')}></Image>
                        </View> 
                    <View style={s.userId}>
                      <Text style={s.title}>Jone Doe</Text>
                      <Text style={s.subtitle}>Sales Man</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>
            
              <DrawerMenu iconName='home' titleName='Home'/>
              <DrawerMenu iconName='user' titleName=' Profile'/>
              <DrawerMenu iconName='meetup' titleName='Meet'/>
              <DrawerMenu iconName='telegram' titleName='Message'/>
              <DrawerMenu iconName='window-close' titleName='Close'/>
              <View style={s.bottomDrawerSection}>
        <Icon 
        style={s.bottomDrawerSection}
        size={27} 
        color={'indigo'}
        name={'sign-in'}
         />
          <Text style={s.bottomDrawerSection}
        onPress={() => props.navigation.navigate('NotificationsScreen')}
      >Login/SignUp</Text>
        </View>
              
        </View>
    )
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
      <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  export default MyDrawer

  
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}



  

