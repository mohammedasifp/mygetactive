import { useRef, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { comments_data } from '../../constants/appConstants'
const   FooterComponent = () => {
    const isCarousel = useRef(null)
    const [index, setIndex] = useState(0)

     return(
            <View style={footerStyle.footerContainer} >
               {/* <Image style={footerStyle.comma_img} source={require('../../assets/comma.png')} /> */}
              <Carousel
                ref={isCarousel}
                data={comments_data}
                renderItem={({ item }) => (
                   <View style={{ width: 270, marginLeft: 10, padding: 0, height: 280, alignSelf: 'center' }} >
                     <Text style={footerStyle.contentStyle} >{item.content}</Text>
                     <Text style={[footerStyle.contentStyle, {marginTop: 30}]}>{item.name}</Text>
                     <Text style={footerStyle.contentStyle}>{item.age}, {item.lostweight}</Text>
                   </View>
                )}
                onSnapToItem={index => setIndex(index)}
                sliderWidth={360}
                itemWidth={360}
                loop={true}
//                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                // autoplayInterval={3000}
              />
              <View style = {{ marginTop: 0, width: '100%',  }}>
              <Pagination
                dotsLength={comments_data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 30,
                  height: 5,
                  borderRadius: 7.5,
                  marginHorizontal: 0,
                  backgroundColor: '#B2DE3E',
                }}
                tappableDots={true}
                inactiveDotStyle={{
                  backgroundColor: '#9DA7CE',
                  width: 5,
                  height: 5,
                  borderRadius: 2.5
                // Define styles for inactive dots here
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
              />
              </View>
              </View>
        )
}

export default FooterComponent

const footerStyle = StyleSheet.create({
    comma_img:{
        width: 70,
        height: 50
    },
    footerContainer:{
       marginTop: 40
    },
    contentStyle:{
        color: '#9DA7CE',
        fontSize: 19,
        fontWeight: 300,
        lineHeight: 25
    }
})