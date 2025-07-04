<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Z-Test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> One-sample z-Test.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-ztest
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ztest = require( '@stdlib/stats-ztest' );
```

#### ztest( x, sigma\[, opts] )

The function performs a one-sample z-test for the null hypothesis that the data in [array][mdn-array] or [typed array][mdn-typed-array] `x` is drawn from a normal distribution with mean zero and known standard deviation `sigma`.

```javascript
var normal = require( '@stdlib/random-base-normal' ).factory;

var rnorm = normal( 0.0, 2.0, {
    'seed': 5776
});

var arr = new Array( 300 );
var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = rnorm();
}

var out = ztest( arr, 2.0 );
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.155,
        'statistic': -1.422,
        'ci': [~-0.391,~0.062],
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the hypothesis test results. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
var table = out.print({
    'digits': 3
});
console.log( table );
/* e.g., =>
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.155
        statistic: -1.422
        95% confidence interval: [-0.391,0.062]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

The `ztest` function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that the mean of `x` is larger than `mu` (`greater`), smaller than `mu` (`less`) or equal to `mu` (`two-sided`). Default: `two-sided`.
-   **mu**: `number` denoting the hypothesized true mean under the null hypothesis. Default: `0`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var table;
var out;
var arr;

arr = [ 2, 4, 3, 1, 0 ];

out = ztest( arr, 2.0, {
    'alpha': 0.01
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.0253
        statistic: 2.2361
        99% confidence interval: [-0.3039,4.3039]

    Test Decision: Fail to reject null in favor of alternative at 1% significance level
*/

out = ztest( arr, 2.0, {
    'alpha': 0.1
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0.0253
        statistic: 2.2361
        90% confidence interval: [0.5288,3.4712]

    Test Decision: Reject null in favor of alternative at 10% significance level
*/
```

To test whether the data comes from a distribution with a mean different than zero, set the `mu` option.

```javascript
var out;
var arr;

arr = [ 4, 4, 6, 6, 5 ];

out = ztest( arr, 1.0, {
    'mu': 5.0
});
/* e.g., returns
    {
        'rejected': false,
        'pValue': 1,
        'statistic': 0,
        'ci': [ ~4.123, ~5.877 ],
        // ...
    }
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

```javascript
var table;
var out;
var arr;

arr = [ 4, 4, 6, 6, 5 ];

out = ztest( arr, 1.0, {
    'alternative': 'less'
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is less than 0

        pValue: 1
        statistic: 11.1803
        95% confidence interval: [-Infinity,5.7356]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

out = ztest( arr, 1.0, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    One-sample z-test

    Alternative hypothesis: True mean is greater than 0

        pValue: 0
        statistic: 11.1803
        95% confidence interval: [4.2644,Infinity]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var normal = require( '@stdlib/random-base-normal' ).factory;
var ztest = require( '@stdlib/stats-ztest' );

var rnorm;
var arr;
var out;
var i;

rnorm = normal( 5.0, 4.0, {
    'seed': 37827
});
arr = new Array( 500 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = rnorm();
}

// Test whether true mean is equal to zero:
out = ztest( arr, 4.0 );
console.log( out.print() );
/* e.g., =>
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 0

        pValue: 0
        statistic: 28.6754
        95% confidence interval: [4.779,5.4802]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

// Test whether true mean is equal to five:
out = ztest( arr, 4.0, {
    'mu': 5.0
});
console.log( out.print() );
/* e.g., =>
    One-sample z-test

    Alternative hypothesis: True mean is not equal to 5

        pValue: 0.4688
        statistic: 0.7245
        95% confidence interval: [4.779,5.4802]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-ztest2`][@stdlib/stats/ztest2]</span><span class="delimiter">: </span><span class="description">two-sample z-Test.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-ztest.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-ztest

[test-image]: https://github.com/stdlib-js/stats-ztest/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-ztest/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-ztest/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-ztest?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-ztest.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-ztest/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-ztest/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-ztest/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-ztest/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-ztest/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-ztest/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-ztest/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-ztest/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-ztest/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

<!-- <related-links> -->

[@stdlib/stats/ztest2]: https://github.com/stdlib-js/stats-ztest2

<!-- </related-links> -->

</section>

<!-- /.links -->
