import React from 'react';
        import {
          View,
          Text,
          Image
        } from 'react-native';
        
        import styles from "../styles/AppStyles";
        function About(){
          return(
          <View style={styles.app}>
            <Text style={{fontSize: 80}}>About</Text>
            <Text style={{fontSize: 50}}>Shenis Macabenta</Text>
            <Image
style={{width: 100, height: 100}}
source={{uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/60343718_2353489461337758_8253181462044475392_n.jpg?_nc_cat=105&_nc_oc=AQnrgKzR3KBZAA09NlpkrQiT7OMa9gm7t5wuvVofCW4TSIr8Joveb22uO2MhcLYk9Zc&_nc_ht=scontent-sea1-1.xx&oh=2d646cfb4be5238acd8ef076bb544d1f&oe=5E2624C4'}}
/>
<Text>Shenis is fun to work with!</Text>

<Text>Tim Hoang</Text>
            <Image
style={{width: 100, height: 100}}
source={{uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/69678232_2412707445487585_3068158296473993216_o.jpg?_nc_cat=110&_nc_oc=AQkM2BEqslcmAJqMcq6KQ2cz398ua-ZYt0_yoK6odg8j--I9KRM90gCUFgBXWjg0gTQ&_nc_ht=scontent-sea1-1.xx&oh=b69e8f9173e80c0c0e1b5d1c7a2f9111&oe=5E3C3625'}}
/>
<Text>Tim is on a diet right now hehe</Text>

<Text>Abhimannyu Sakthivel</Text>
            <Image
style={{width: 100, height: 100}}
source={{uri: 'https://scontent-sea1-1.cdninstagram.com/vp/c8beb65c6f8d659171ba4c415bf6f68f/5E3D795D/t51.2885-19/s320x320/67943816_376607943277526_1800400477452500992_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'}}
/>
<Text>Abhi likes food</Text>
          </View>
          )
        }
        
        
        export default About;