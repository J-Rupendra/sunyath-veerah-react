import { render, screen } from "@testing-library/react"
import Contact from "../src/components/Contact"
import '@testing-library/jest-dom'


// we can use describe to group the test cases
describe('contact page test cases',()=>{

    test('Should render the contact component',()=>{
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    // it and test methods are same
    it('Should render the input in contact component',()=>{
        render(<Contact/>)
        const textbox = screen.getByRole("textbox")
        // Assertion - not a manditory thing
        expect(textbox).toBeInTheDocument()
    })
})
