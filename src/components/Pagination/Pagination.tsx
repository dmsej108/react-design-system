import styles from './Pagination.module.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export interface PaginationProps {
  itemCount?: number;
  cntPerPage?: number;
  currentPage?: number;
  onChangedPage?: (pageNo: number, eventFlag: boolean) => void;
}

export const Pagination = ({ itemCount = 0, cntPerPage = 0, currentPage = 0, onChangedPage }: PaginationProps) => {
  const pageCount = parseInt('' + (itemCount - 1) / cntPerPage) + 1;

  const getCounterView = (): number[] => {
    let first = 1;
    let last = currentPage;
    let gap = 0;
    const viewCounter: number[] = [];

    if (pageCount < 11) {
      first = 1;
      last = pageCount;
    } else {
      gap = (currentPage < 5) ? 5 - currentPage :
        (currentPage + 5 > pageCount) ? currentPage + 5 - pageCount : 0;
      first = (currentPage < 5) ? 1 : currentPage - 4 - gap;
      last = (currentPage + 5 > pageCount) ? pageCount : currentPage + 5 + gap;
    }

    for (let i = first; i <= last; i++) {
      viewCounter.push(i);
    }

    return viewCounter;
  };

  const pageNumbers = getCounterView();

  const handleChangedPage = (pageNo: number) => {
    if (pageNo <= 0 || pageNo > pageCount) return;
    onChangedPage?.(pageNo, true);
  };

  return (
    <ul className={styles.pagination}>
      <li className={styles.pageItem}>
        <Button variant="ghost" size="small" aria-label="맨처음" onClick={() => handleChangedPage(1)}>
          <Icon name="arrowLeft" size="small" />
        </Button>
      </li>
      <li className={styles.pageItem}>
        <Button variant="ghost" size="small" aria-label="이전" onClick={() => handleChangedPage(currentPage - 1)}>
          <Icon name="chevronLeft" size="small" />
        </Button>
      </li>

      {pageNumbers.map((pageNum) => (
        <li key={pageNum} className={styles.pageItem}>
          <Button
            variant={pageNum === currentPage ? 'primary' : 'outline'}
            size="small"
            onClick={() => handleChangedPage(pageNum)}
          >
            {pageNum}
          </Button>
        </li>
      ))}

      <li className={styles.pageItem}>
        <Button variant="ghost" size="small" aria-label="다음" onClick={() => handleChangedPage(currentPage + 1)}>
          <Icon name="chevronRight" size="small" />
        </Button>
      </li>
      <li className={styles.pageItem}>
        <Button variant="ghost" size="small" aria-label="맨끝" onClick={() => handleChangedPage(pageCount)}>
          <Icon name="arrowRight" size="small" />
        </Button>
      </li>
    </ul>
  );
};

Pagination.displayName = 'SPagination';
