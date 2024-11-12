{
    class AudioPlayer extends HTMLElement {
        constructor() {
            super();

            this.attachShadow( init: {mode: 'open'});
            this.render();
        }
        render() {
            this.shadowRoot.innerHTML = `<audio src="mp3/Gorillaz - Feel good.mp3" controls></audio>`;
        }
    }
     customElements.define( name: 'audioplayer', AudioPlayer)
}