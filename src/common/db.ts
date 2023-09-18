import { ICategory } from "./types/ICategory";
import { IPostData } from "./types/IPostData";
import { IPostFullData } from "./types/IPostFullData";
import Database from "better-sqlite3";

const db = new Database('mydatabase.db'); // Здесь 'mydatabase.db' - имя вашей базы данных

// Создание таблиц, если они не существуют
db.exec(`
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY,
    imageUrl TEXT,
    text TEXT
);

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    category INTEGER,
    date TEXT,
    updateDate TEXT,
    header TEXT,
    description TEXT,
    imageUrl TEXT,
    views INTEGER,
    likes INTEGER,
    comments INTEGER,
    content TEXT, -- Добавляем поле content
    commentaries TEXT -- Добавляем поле commentaries
);
`);

// Функция для добавления категории
export function addCategory(category: ICategory) {
    const stmt = db.prepare('INSERT INTO categories (imageUrl, text) VALUES (?, ?)');
    stmt.run(category.imageUrl, category.text);
}

// Функция для получения всех категорий
export function getAllCategories(): ICategory[] {
    const stmt = db.prepare('SELECT * FROM categories');
    return stmt.all() as ICategory[];
}

// Функция для добавления поста
export function addPost(post: IPostFullData) {
    const stmt = db.prepare('INSERT INTO posts (category, date, updateDate, header, description, imageUrl, views, likes, comments, content, commentaries) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    stmt.run(
        post.category,
        post.date,
        post.updateDate,
        post.header,
        post.description,
        post.imageUrl,
        post.views,
        post.likes,
        post.comments,
        JSON.stringify(post.content), // Сериализуем объект content в JSON
        JSON.stringify(post.commentaries) // Сериализуем объект commentaries в JSON
    );
}

// Функция для получения списка постов типа IPostData
export function getAllPostsData(): IPostData[] {
    const stmt = db.prepare('SELECT id, category, date, updateDate, header, description, imageUrl, views, likes, comments FROM posts');
    const rows = stmt.all();

    return rows as IPostData[];
}

// Функция для получения конкретного поста по ID типа IPostFullData
export function getPostById(id: number): IPostFullData | null {
    const stmt = db.prepare('SELECT * FROM posts WHERE id = ?');
    const row = stmt.get(id) as { content: string; commentaries: string } | null;

    if (!row) {
        return null;
    }

    return {
        ...row,
        content: JSON.parse(row.content),
        commentaries: JSON.parse(row.commentaries)
    } as IPostFullData;
}