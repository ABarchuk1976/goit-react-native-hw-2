import * as Font from 'expo-font';

import { RegistrationScreen } from './src/screens/auth/RegistrationScreen/RegistrationScreen';
import { LoginScreen } from './src/screens/auth/LoginSreen/LoginScreen';

const loadFonts = async () => {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/roboto_regular.ttf'),
  });
};

loadFonts();

export default function App() {
  // const [isReady, setIsReady] = useState();

  // if (!isReady) {
  //   return (

  //   );
  // }

  return <RegistrationScreen />;
  // return <LoginScreen />;
}
