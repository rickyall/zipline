# 下单模块order
```python
def order(asset, amount, limit_price=None, stop_price=None, style=None):
    """下单

    Parameters
    ----------
    asset : Asset
        资产的类型
    amount : int
        amount为正数的时候是买入
        amount为负数的时候是卖出
    limit_price : float, optional
        限价
    stop_price : float, optional
        The stop price for the order.
    style : ExecutionStyle, optional
        The execution style for the order.

    Returns
    -------
    order_id : str
        这个单的唯一标示

    Notes
    -----
    The ``limit_price`` and ``stop_price`` arguments provide shorthands for
    passing common execution styles. Passing ``limit_price=N`` is
    equivalent to ``style=LimitOrder(N)``. Similarly, passing
    ``stop_price=M`` is equivalent to ``style=StopOrder(M)``, and passing
    ``limit_price=N`` and ``stop_price=M`` is equivalent to
    ``style=StopLimitOrder(N, M)``. It is an error to pass both a ``style``
    and ``limit_price`` or ``stop_price``.

    See Also
    --------
    :class:`zipline.finance.execution.ExecutionStyle`
    :func:`zipline.api.order_value`
    :func:`zipline.api.order_percent`
    """

```
# 记录方法record
```python
def record(*args, **kwargs):
    """Track and record values each day.

    Parameters
    ----------
    **kwargs
        The names and values to record.

    Notes
    -----
    These values will appear in the performance packets and the performance
    dataframe passed to ``analyze`` and returned from
    :func:`~zipline.run_algorithm`.
    """
```


# 命令行工具
```python
Usage: zipline run [OPTIONS]

  Run a backtest for the given algorithm.

Options:
  -f, --algofile FILENAME         运行的脚本
  -t, --algotext TEXT             The algorithm script to run.
  -D, --define TEXT               Define a name to be bound in the namespace
                                  before executing the algotext. For example
                                  '-Dname=value'. The value may be any python
                                  expression. These are evaluated in order so
                                  they may refer to previously defined names.
  --data-frequency [minute|daily]
                                  程序运行的频率
                                  [默认: 日频]
  --capital-base FLOAT            初始资金量.
                                  [默认: 10000000.0]
  -b, --bundle BUNDLE-NAME        使用的数据源.
                                  [默认: quantopian-quandl]
  --bundle-timestamp TIMESTAMP    The date to lookup data on or before.
                                  [default: <current-time>]
  -s, --start DATE                初始的日期.
  -e, --end DATE                  结束的日期.
  -o, --output FILENAME           将交易记录输出. If this
                                  is '-' the perf will be written to stdout.
                                  [default: -]
  --print-algo / --no-print-algo  Print the algorithm to stdout.
  --help                          Show this message and exit.
```
