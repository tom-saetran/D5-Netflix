import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import React from "react"

import CreditCardInput from "react-credit-card-input"

class CreateAccount extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        firstNameValidated: false,

        lastName: "",
        lastNameError: "",
        lastNameValidated: false,

        streetName: "",
        streetNameError: "",
        streetNameValidated: false,

        cityName: "",
        cityNameError: "",
        cityNameValidated: false,

        zipName: "",
        zipNameError: "",
        zipNameValidated: false,

        emailName: "",
        emailNameError: "",
        emailNameValidated: false,

        passwordName: "",
        passwordNameError: "",
        passwordNameValidated: false,

        dobName: "",
        dobNameError: "",
        dobNameValidated: false,

        tosName: "",
        tosNameError: "",
        tosNameValidated: false,

        allValidated: false
    }

    handleSubmit = event => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
    }

    checkAllValidated = () => {
        if (this.state.firstNameValidated && this.state.lastNameValidated && this.state.streetNameValidated && this.state.cityNameValidated && this.state.zipNameValidated && this.state.emailNameValidated && this.state.passwordNameValidated && this.state.dobNameValidated && this.state.tosNameValidated) this.setState({ allValidated: true })
        else this.setState({ allValidated: false })
    }

    render() {
        return (
            <Container style={this.state.allValidated ? { backgroundColor: "#112112" } : { backgroundColor: "#111111" }} className={this.state.allValidated ? "border border-success pb-2" : "border border-light pb-2"}>
                <Form className="pt-3" onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="first-name">
                            <Form.Label className="text-muted">First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                value={this.state.firstName}
                                onChange={async e => {
                                    await this.setState({ firstName: e.target.value })
                                    if (e.target.value.length < 2) await this.setState({ firstNameError: "First name is too short", firstNameValidated: false })
                                    else await this.setState({ firstNameError: "", firstNameValidated: true })
                                    e.target.classList = this.state.firstNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.firstNameError}</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="last-name">
                            <Form.Label className="text-muted">Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                value={this.state.lastName}
                                onChange={async e => {
                                    await this.setState({ lastName: e.target.value })
                                    if (e.target.value.length < 3) await this.setState({ lastNameError: "Last name is too short", lastNameValidated: false })
                                    else await this.setState({ lastNameError: "", lastNameValidated: true })
                                    e.target.classList = this.state.lastNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.lastNameError}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="email-name">
                            <Form.Label className="text-muted">E-mail</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="E-mail"
                                value={this.state.emailName}
                                onChange={async e => {
                                    await this.setState({ emailName: e.target.value })
                                    if (e.target.value.length < 3 || e.target.value[e.target.value.length - 1] === "@" || !e.target.value.match("@")) await this.setState({ emailNameError: "Enter a valid email address", emailNameValidated: false })
                                    else await this.setState({ emailNameError: "", emailNameValidated: true })
                                    e.target.classList = this.state.emailNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.emailNameError}</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="password-name">
                            <Form.Label className="text-muted">Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                value={this.state.passwordName}
                                onChange={async e => {
                                    let passwordRequirements = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                                    await this.setState({ passwordName: e.target.value })
                                    if (!e.target.value.match(passwordRequirements)) await this.setState({ passwordNameError: "Password does not fulfill the criteria", passwordNameValidated: false })
                                    else await this.setState({ passwordNameError: "", passwordNameValidated: true })
                                    e.target.classList = this.state.passwordNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.passwordNameError}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="street-name">
                            <Form.Label className="text-muted">Street</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Street"
                                value={this.state.streetName}
                                onChange={async e => {
                                    await this.setState({ streetName: e.target.value })
                                    if (e.target.value.length < 2) await this.setState({ streetNameError: "Street is too short", streetNameValidated: false })
                                    else await this.setState({ streetNameError: "", streetNameValidated: true })
                                    e.target.classList = this.state.streetNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.streetNameError}</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="city-name">
                            <Form.Label className="text-muted">City</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="City"
                                value={this.state.cityName}
                                onChange={async e => {
                                    await this.setState({ cityName: e.target.value })
                                    if (e.target.value.length < 3) await this.setState({ cityNameError: "City is too short", cityNameValidated: false })
                                    else await this.setState({ cityNameError: "", cityNameValidated: true })
                                    e.target.classList = this.state.cityNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.cityNameError}</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="zip-name">
                            <Form.Label className="text-muted">ZIP Code</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Zip Code"
                                value={this.state.zipName}
                                onChange={async e => {
                                    await this.setState({ zipName: e.target.value })
                                    if (e.target.value.length !== 5) await this.setState({ zipNameError: "ZIP Code needs to be 5 digits", zipNameValidated: false })
                                    else await this.setState({ zipNameError: "", zipNameValidated: true })
                                    e.target.classList = this.state.zipNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.zipNameError}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="dob-name">
                            <Form.Label className="text-muted">Date Of Birth</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                onChange={async e => {
                                    await this.setState({ dobName: e.target.value })
                                    /*replace check*/ if (e.target.value.length < 3) await this.setState({ dobNameError: "DoB is wrong", dobNameValidated: false })
                                    else await this.setState({ dobNameError: "", dobNameValidated: true })
                                    e.target.classList = this.state.dobNameValidated ? "border border-success form-control" : "border border-warning form-control"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.dobNameError}</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="credit-name">
                            <>
                                <Form.Label className="text-muted">Credit Card Details (Optional)</Form.Label>
                                <CreditCardInput cardNumberInputProps={{ value: this.cardNumber, onChange: this.handleCardNumberChange }} cardExpiryInputProps={{ value: this.expiry, onChange: this.handleCardExpiryChange }} cardCVCInputProps={{ value: this.cvc, onChange: this.handleCardCVCChange }} fieldClassName="input" />
                            </>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="tos-name">
                            <Form.Check
                                required
                                type="checkbox"
                                label={
                                    <span className="text-muted">
                                        I Agree to the
                                        <a className="px-1" href="/tos" target="_blank">
                                            Terms of Service
                                        </a>
                                    </span>
                                }
                                onChange={async e => {
                                    await this.setState({ tosName: e.target.value })
                                    if (!e.target.checked) await this.setState({ tosNameError: "You must agree to continue.", tosNameValidated: false })
                                    else await this.setState({ tosNameError: "", tosNameValidated: true })
                                    e.target.classList = this.state.tosNameValidated ? "border border-success form-check-input" : "border border-warning form-check-input"
                                    this.checkAllValidated()
                                }}
                            />
                            <Form.Label className="text-muted">{this.state.tosNameError}</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Button className={this.state.allValidated ? "w-100" : "w-100 text-muted"} variant={this.state.allValidated ? "success" : "disabled"} type="submit">
                        Register Now!
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default CreateAccount
