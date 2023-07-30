
import { SafeAreaView } from 'react-native';
import Index from './app/Index.js';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', top: "10%"}}>
      {/* coplete UI is in index.js component in app folder */}
      <Index/>
    </SafeAreaView>
  );
}


