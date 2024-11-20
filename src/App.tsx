
import { ComponentCounter } from './components/ComponentCounter/ComponentCounter.tsx'
import { MiPrimerComponente } from './components/MiPrimerComponente/MiPrimerComponente.tsx'
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect.tsx'
import { FormComponent } from './components/FormComponent/FormComponent.tsx'
import { AppProduct } from './components/AppProduct/AppProduct.tsx'
import { FormProduct } from './components/AppProduct/FormProduct/FormProduct.tsx'

export const App = () => {
  return (
    <>
    <div>
    {/* <MiPrimerComponente text={"Texto desde propiedades"} color="red" fontSize={2}/>
    <ComponentCounter/>
    <ComponentUseEffect/>
    <ComponentUseEffect/> */}
    {/* <FormComponent/> */}
    <AppProduct/>
    </div>
    </>
  )
}
