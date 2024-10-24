import { LitElement, html, css } from "lit";

function style () {
    return css`
        div {
            background-color: grey;
            height:80vh;
        }
    `;
}

export class HeroPicture extends LitElement {
    static styles = style();
    
    render(){
        return html`
            <div></div>
        `;
    }
}

window.customElements.define("app-heropicture", HeroPicture);