import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Principal from './Principal';
import Consultas from './Consultas';
import Perfil from './Perfil';
import Explorar from './Explorar';

const Tab = createBottomTabNavigator();

const screenOptions = { 
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#fff"
}

const tabs = [
    {
        name: 'Principal',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    },
]

export default function Tabs(){
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
        >
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{ 
                        headerShown: false,
                        tabBarLabel: tab.name,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name={tab.icon} color={color} size={size} />
                        ),
                    }}
                />
            ))
            }
        </Tab.Navigator>
    );
}
