export class PageComponent {
    // HTML의 카드들의 목록을 담고 있을 것 
    private element: HTMLUListElement;
    constructor() {
        // ul 태그 생성
        this.element = document.createElement('ul');
        // class명 -> page
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }
    
    // 외부에서 pageComponent를 만들어서 필요한 곳에 이 페이지를 추가할 수 있는 것을 만들자.
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        // 부모의 자식요소 어딘가에 추가할 수 있는 API (삽입 포지션 지정)
        parent.insertAdjacentElement(position, this.element);
    }
}