DROP FUNCTION IF EXISTS my_report;
DELIMITER //
CREATE FUNCTION my_report(
    month SMALLINT UNSIGNED,
    year SMALLINT UNSIGNED,
    min_amount SMALLINT UNSIGNED
)
    RETURNS SMALLINT UNSIGNED

    READS SQL DATA

BEGIN
    DECLARE amount_return SMALLINT UNSIGNED;
    SELECT COUNT(*)
    INTO amount_return
    FROM (SELECT customer_id
          FROM payment
          WHERE (YEAR(payment_date) = year AND MONTH(payment_date) = month)
          GROUP BY customer_id
          HAVING sum(amount) >= min_amount) as pci;
    RETURN amount_return;
end //
DELIMITER ;

select my_report(8, 2005, 40);