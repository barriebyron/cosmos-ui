import TmHelloWorld from "./components/tmHelloWorld"
import TmField from "./components/tmField"
import TmFormMsg from "./components/tmFormMsg"

const TendermintComponents = {
  TmHelloWorld,
  TmField,
  TmFormMsg
}

TendermintComponents.install = Vue =>
  Object.keys(TendermintComponents)
    .filter(component => component !== "install")
    .map(component => TendermintComponents[component])
    .forEach(Vue.use)

export default TendermintComponents

export {
  default as TmHelloWorld
} from "./components/tmHelloWorld/tmHelloWorld.vue"
export { default as TmField } from "./components/tmField/tmField.vue"
export { default as TmFormMsg } from "./components/tmFormMsg/tmFormMsg.vue"
