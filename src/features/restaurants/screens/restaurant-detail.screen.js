import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {List} from 'react-native-paper';
import {Spacer} from '../../../components';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {OrderButton} from '../components/restaurant-info-styles';
import {CartContext} from '../../../services/cart/cart.context';

export const RestaurantDetailScreen = ({route, navigation}) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const {restaurant} = route.params;
  const {addToCart} = useContext(CartContext);
  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} navigation={navigation} />
      <View style={{flexGrow: 1}}>
        <ScrollView>
          <List.Accordion
            title="Breakfast"
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            left={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/3601/3601090.png',
                }}
              />
            )}
            right={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: breakfastExpanded
                    ? 'https://cdn-icons-png.flaticon.com/512/2626/2626960.png'
                    : 'https://cdn-icons-png.flaticon.com/512/2618/2618316.png',
                }}
              />
            )}>
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
            left={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1161/1161695.png',
                }}
              />
            )}
            right={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: lunchExpanded
                    ? 'https://cdn-icons-png.flaticon.com/512/2626/2626960.png'
                    : 'https://cdn-icons-png.flaticon.com/512/2618/2618316.png',
                }}
              />
            )}>
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
            left={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/868/868070.png',
                }}
              />
            )}
            right={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: dinnerExpanded
                    ? 'https://cdn-icons-png.flaticon.com/512/2626/2626960.png'
                    : 'https://cdn-icons-png.flaticon.com/512/2618/2618316.png',
                }}
              />
            )}>
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet w/ Chicken Mushroom" />
            <List.Item title="Steak Frities" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
            left={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3086/3086337.png',
                }}
              />
            )}
            right={props => (
              <List.Icon
                {...props}
                icon={{
                  uri: drinksExpanded
                    ? 'https://cdn-icons-png.flaticon.com/512/2626/2626960.png'
                    : 'https://cdn-icons-png.flaticon.com/512/2618/2618316.png',
                }}
              />
            )}>
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </ScrollView>
        <Spacer position={'bottom'} size="lg">
          <OrderButton
            icon={{
              uri: 'https://cdn-icons-png.flaticon.com/512/925/925748.png',
            }}
            mode="contained"
            onPress={() => {
              addToCart({item: 'Special', price: 1299}, restaurant);
              navigation.navigate('Checkout');
            }}>
            Order Special only 12.99
          </OrderButton>
        </Spacer>
      </View>
    </SafeAreaView>
  );
};
