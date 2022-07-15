import Button from "../UI/Button/Button";

import styles from "./PostItem.module.css";

const PostItem = () => {
  return (
    <div className={styles.postItemWrapper}>
      <div className={styles.postItem}>
        <h3>1</h3>
        <div className={styles.postItemText}>
          <strong>Для чего нужна библиотека React ?</strong>
          <p>
            JavaScript-библиотека с открытым исходным кодом для разработки
            пользовательских интерфейсов. React разрабатывается и поддерживается
            Facebook, Instagram и сообществом отдельных разработчиков и
            корпораций.
          </p>
        </div>
        <div className={styles.postItemBtn}>
          <Button className={styles.open}>Создать пост</Button>
          <Button className={styles.del}>Создать пост</Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
