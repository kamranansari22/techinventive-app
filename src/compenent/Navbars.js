import React from "react";
import Logo from '../assets/images/logo.png';
import Logo2 from '../assets/images/company-logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Navbars extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    return (
      <Navbar color="" light expand="lg">
        <NavbarBrand href="/"> 
          <img src={Logo}  width="220" height="47" alt="" className="lazyload"/>
          <img src={Logo2}  width="220" height="47" alt="" className="lazyload2"/>
        </NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pricing">PRICING</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">ABOUT</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Mobile App
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/ios-app">
                     IOS App Development
                  </DropdownItem>
                  <DropdownItem href="/android">
                     Android App Development
                  </DropdownItem>
                </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                   SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/web-design">
                     Web Design
                  </DropdownItem>
                  <DropdownItem href="/drupal-development">
                     Drupal Development
                  </DropdownItem>
                  <DropdownItem href="/app-development">
                     App Development
                  </DropdownItem>
                  <DropdownItem href="/web-development">
                     Web Development
                  </DropdownItem>
                  <DropdownItem href="/custom-application-development">
                     Custom Application Development
                  </DropdownItem>
                  <DropdownItem href="/responsive-web-designing">
                     Responsive Web Designing
                  </DropdownItem>
                  <DropdownItem href="/psd-to-html">
                    PSD to HTML Conversion
                  </DropdownItem>
                </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/portfolio">PORTFOLIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">CONTACT</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    );
  }
}