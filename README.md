# Testing Carbon's input components with react-hook-form

This repo was created for the sole purpose of testing the compatibility and performance of Carbon's input components  with the `react-hook-form` package.

It is with utmost importance that the we ensure that any future work does not negatively impact the performance of our consumer's existing implementations using Carbon's input components.
# Performance Profiling

In order to prove this we needed a way of reliably profiling the current performance. For this we used [React's profiling tools](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) to obtain the necessary data to make an informed conclusion. 

To make these comparisons as fair as possible, we will ensure that both examples: 
 - will consist of the same components in the same order.
 - will have validations configured.
 - will be tested on the same machine (Macbook Pro 2019, i9, 16GB RAM, Mac OS BigSur v11.5.2).
 - will be tested in the same web browser (Google Chrome v101.0.4951.64 (Official Build) (x86_64)).
 - Refresh data will be based on [Chrome's network inspector in DevTools](https://developer.chrome.com/docs/devtools/network/).
 - 
## Formik
The code used for this example can be found [here](https://codesandbox.io/s/carbon-formik-yup-latest-ctj8n).

- `Simple Select` causes one re-render `onBlur` and it took 1.4ms to rerender the page.
- `Multi Select` causes one re-render `onBlur` and it took 1.4ms to rerender the page.
- `Textbox` when typing "foo" caused one re-render `onBlur` and it took 0.7ms to rerender the page.
- `Textarea` when typing "foo" caused one re-render `onBlur` and it took 1.1ms to rerender the page.
- `Grouped Character` when typing "abcdef" caused one re-render `onBlur` to format to "ab-cd-ef" and it took 1.3ms to rerender the page.
- `Decimal` when typing "22.2222" caused one re-render `onBlur` and it took 1ms to rerender the page.
- `Decimal` when typing "12" caused one re-render `onBlur` to format the number to "12.00" and it took 1.2ms to rerender the page.
- `Number` when typing "1234" caused one re-render `onBlur` and it took 0.7ms to rerender the page.
- `Date Input` caused one rerender `onBlur` and it took 1ms to rerender the page.
- `Date Range` caused two rerenders `onBlur` and it took 1.2ms for each of the page rerenders.
- `Checkbox` caused one rerender `onBlur` and it took 1.9ms to rerender the page.
- `Switch` caused one rerender `onBlur` and it took 2.9ms to rerender the page.
- Clicking each `radio button` in the `Radio Group` caused three rerenders and it took 0.9ms to rerender the page on `onBlur`.
- Clicking each `button` in the `Button Group` caused three rerenders and it took 2.2ms to rerender the page on `onBlur`.
- Clicking each `color` in the `Simple Color Picker` caused six rerenders and it took 7.3ms to rerender the page `onBlur`.
- Submitting an empty form caused all components to error and it took 104.9ms to rerender the page.
- Submitting a fully completed form caused one rerender and it took 64.1ms to rerender the page.
- Refreshing the page causes one rerender and it took 821ms to reload the page.
- 
## react-hook-form
The code used for this example can be found [here](https://github.com/DipperTheDan/react-hook-form-test).
- `Simple Select` causes one rerender `onBlur` and it took 1ms to rerender the page.
- `Multi Select` causes one rerender `onBlur` and it took 0.8ms to rerender the page.
- `Textbox` when typing "foo" caused one rerender `onBlur` and it took 1.2ms to rerender the page.
- `Textarea` when typing "foo" caused one rerender `onBlur` and it took 0.8ms to rerender the page.
- `Grouped Character` when typing "abcdef" caused one rerender `onBlur` to format to "ab-cd-ef" and it took 1.1ms to rerender the page.
- `Decimal` when typing "22.2222" caused one rerender `onBlur` and it took 1ms to rerender the page.
- `Decimal` when typing "12" caused one rerender `onBlur` to format the number to "12.00" and it took 0.7ms to rerender the page.
- `Number` when typing "1234" caused one rerender `onBlur` and it took 0.9ms to rerender the page.
- `Date Input` caused one rerender `onBlur` and it took 0.7ms to rerender the page.
- `Date Range` caused two rerenders `onBlur` and it took 1ms for each of the page rerenders.
- `Checkbox` caused one rerender `onBlur` and it took 0.9ms to rerender the page.
- `Switch` caused one rerender `onBlur` and it took 0.9ms to rerender the page.
- Clicking each `radio button` in the `Radio Group` caused one rerender `onBlur` and it took 2.5ms to rerender the page.
- Clicking each `button` in the `Button Group` caused one rerender `onBlur` and it took 2.2ms to rerender the page.
- Clicking each `color` in the `Simple Color Picker` caused one rerender `onBlur` and it took 2ms to rerender the page.
- Submitting an empty form caused all components to error and it took 2.9ms to rerender the page.
- Submitting a fully completed form caused one rerender and it took 4.8ms to rerender the page.
- Refreshing the page causes one rerender and it took 667ms to reload the page.
- 
## Conclusion

The rerender count was roughly the same across the two packages (Formik: 24, react-hook-form: 19) except `Radio Group`, `Button Group` and `Simple Color Picker` in `Formik`. These three components rerendered on every `click` of a `radio button`, `button` or `color` in `Formik` compared with `react-hook-form` which only triggered a rerender when the group as a whole lost focus. This meant that rerenders only happened when `onBlur` was fired, thus proving itself to be more efficient.

`react-hook-form` out performed `Formik` when refreshing the page, submitting empty (which triggered validations on each component) and completed forms. Submitting forms is where we saw the biggest difference with react-hook-form taking 2.9ms and 4.8ms compared to 104.9ms and 64.1ms of Formik, therefore again proving `react-hook-form` to be more efficient than `Formik`
