export class ImageComponent {
    private element: HTMLElement;
    constructor(title: string, url: string) {
        // template태그를 이용해서 어떠한 요소들을 내부적으로 만들 수 있도록 한다.
        const template = document.createElement('template');
        // innerHTML -> string type으로 코드 작성 가능
        // 사용자에게 전달받은 걸 innerHTML로 설정하는 건 위험함
        template.innerHTML = `
        <section class="image">
            <div class="image__holder">
                <img src="" alt="" class="image__thumbnail">
                <p class="image__title"></p>
            </div>
        </section>`;
        this.element = template.content.firstElementChild! as HTMLElement;

        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }
    
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}