import {View, Text, Image} from 'react-native'
import {s} from './style'

export function Welcome(){
  return(
    <View>
      <Image 
        source={require('@/assets/logo.png')}
        style={s.logo}
      />
      <Text style={s.title}>Boas Vindas</Text>
      <Text style={s.subtitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  )
}