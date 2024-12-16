import Body from './components/body'
import { Provider } from 'react-redux' //provide store to app
import appStore from './redux/appStore'

function App() {
        return(
          <Provider store={appStore}>
            <Body/>
          </Provider>
         
        )
}

export default App
