import { render, screen } from "@testing-library/react"
import AppHeader from '../src/components/AppHeader'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from '../src/utilities/appStore'
import "@testing-library/jest-dom"

it("should render header component",()=>{
    render(
        <Provider store={appStore} >
            <BrowserRouter>
            <AppHeader />
            </BrowserRouter>
        </Provider>
    )

    const cartLink = screen.getByText("Cart")

    expect(cartLink).toBeInTheDocument()
})