
import React from 'react'
import { Image, View } from 'react-native';

const Filter2 = ({
    face:{
        bounds:{
            size:{width:faceWidth,height:faceHeight}
        },
        leftEyePosition,rightEyePosition,noseBasePosition
      }
    
    })=>{
        const hatsWidth=faceWidth;
        const hatsHeight=faceHeight/3; 
        const hatPosition=noseBasePosition

    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) 
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => angleRad * 180 / Math.PI
    return (
        <View style={{
            position: 'absolute',
            left: leftEyePosition.x - hatsWidth * 0.675,
            top: leftEyePosition.y - hatsHeight * 0.5
        }}>
            <Image
                source={require('../assets/crown-pic2.png')}
                style={{
                    width: hatsWidth,
                    height: hatsHeight,
                    resizeMode: 'contain',
                    position:hatPosition,
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }}
            />
        </View>
    );
};


export default Filter2