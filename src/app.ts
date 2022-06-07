import { Component } from './components/component.js';
import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, Composable, PageItemComponent } from './components/page/page.js';

class App {
    // Component이면서 addChild를 할 수 있는 Composable이 가능한 요소
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/yA4d5ZydVVQ');
        this.page.addChild(video);

        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);
    }
}

// 동적으로 만드는게 아니라 개발시 정확히 정해진 경우 -> 무조건 null 아니고 HTMLElement 타입이라고 Type Assertion로 표시
new App(document.querySelector('.document')! as HTMLElement)