<div class="markdown-body">
    <h1>[算法导论]第五章-概率分析与随机算法</h1>
    <blockquote>
        <p>上帝从不掷骰子</p>
    </blockquote>
    <h2>雇用问题</h2>
    <h4>问题描述</h4>
    <p>把《算法导论》里的问题简化描述一下是这样的：</p>
    <blockquote>
        <p>你准备雇用一个助理，原则是只用最好的，所以每面试到一个比当前助理更好的候选人，你就会用他替换，而且你打算一直面试下去。每次面试都要aaaaa花费少额费用，而每次雇用要花费较大额的费用（遣散费和雇用费）。问题是计算总花费。
        </p>
    </blockquote>
    <p>用数学的方式描述是，假设一共面试 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">n</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span
                        class="mord mathdefault">n</span></span></span></span> 次，发生了 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>m</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">m</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span
                        class="mord mathdefault">m</span></span></span></span> 次雇用，面试一次费用为 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>C</mi>
                                <mi>t</mi>
                            </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">C_t</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.07153em;">C</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.2805559999999999em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight">t</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，雇用一次的费用为
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>C</mi>
                                <mi>h</mi>
                            </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">C_h</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.07153em;">C</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.33610799999999996em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight">h</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>
        ，那么总费用为：</p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <mi>S</mi>
                                <mo>=</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>t</mi>
                                </msub>
                                <mi>n</mi>
                                <mo>+</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>h</mi>
                                </msub>
                                <mi>m</mi>
                            </mrow>
                            <annotation encoding="application/x-tex">S = C_t n + C_h m
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault"
                            style="margin-right:0.05764em;">S</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span
                            class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.2805559999999999em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">t</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mord mathdefault">n</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span
                            class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.33610799999999996em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">h</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mord mathdefault">m</span></span></span></span></span></p>
    <p>其中 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>C</mi>
                                <mi>h</mi>
                            </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">C_h</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.07153em;">C</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.33610799999999996em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight">h</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>
        是远大于 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>C</mi>
                                <mi>t</mi>
                            </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">C_t</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.07153em;">C</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.2805559999999999em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight">t</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>的。这里需要确定的就是雇用次数
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>m</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">m</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span
                        class="mord mathdefault">m</span></span></span></span> 。</p>
    <h4>最好情况</h4>
    <p>最好的情况就是第一次面试就找到了最好的候选人，也就是 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>m</mi>
                            <mo>=</mo>
                            <mn>1</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">m=1</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">m</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">=</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:0.64444em;vertical-align:0em;"></span><span
                        class="mord">1</span></span></span></span>，则总花费为：</p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <mi>S</mi>
                                <mo>=</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>t</mi>
                                </msub>
                                <mi>n</mi>
                                <mo>+</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>h</mi>
                                </msub>
                            </mrow>
                            <annotation encoding="application/x-tex">S = C_t n + C_h
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault"
                            style="margin-right:0.05764em;">S</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span
                            class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.2805559999999999em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">t</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mord mathdefault">n</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span
                            class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.33610799999999996em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">h</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span>
    </p>
    <h4>最坏情况</h4>
    <p>运气不好，每次面试的候选人都比前一个强，那么每次面试后都要雇用一次，即 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>m</mi>
                            <mo>=</mo>
                            <mi>n</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">m=n</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">m</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">=</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span
                        class="mord mathdefault">n</span></span></span></span>，那么总花费为：</p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <mi>S</mi>
                                <mo>=</mo>
                                <mo stretchy="false">(</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>t</mi>
                                </msub>
                                <mo>+</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>h</mi>
                                </msub>
                                <mo stretchy="false">)</mo>
                                <mi>n</mi>
                            </mrow>
                            <annotation encoding="application/x-tex">S = (C_t + C_h)n
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault"
                            style="margin-right:0.05764em;">S</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span
                            class="mopen">(</span><span class="mord"><span class="mord mathdefault"
                                style="margin-right:0.07153em;">C</span><span class="msupsub"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.2805559999999999em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">t</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                            class="mbin">+</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                            class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span
                                class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.33610799999999996em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">h</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mclose">)</span><span class="mord mathdefault">n</span></span></span></span></span>
    </p>
    <h4>平均情况</h4>
    <p>平均情况就是假设候选人能力的分布是均匀的，也就是他们出现的顺序是完全随机的。根据<em>大数定理</em>，只要问题的规模足够大，那么他们的一定是按概率分布的。</p>
    <p>假设候选人的按能力大小排名为 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>R</mi>
                            <mi>a</mi>
                            <mi>n</mi>
                            <mi>k</mi>
                            <mo>&lt;</mo>
                            <mn>1</mn>
                            <mo separator="true">,</mo>
                            <mn>2</mn>
                            <mo separator="true">,</mo>
                            <mn>3</mn>
                            <mo separator="true">,</mo>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mo separator="true">,</mo>
                            <mi>n</mi>
                            <mo>&gt;</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">Rank&lt;1,2,3,...,n&gt;</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.73354em;vertical-align:-0.0391em;"></span><span class="mord mathdefault"
                        style="margin-right:0.00773em;">R</span><span class="mord mathdefault">a</span><span
                        class="mord mathdefault">n</span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">&lt;</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.8388800000000001em;vertical-align:-0.19444em;"></span><span
                        class="mord">1</span><span class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">2</span><span
                        class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">3</span><span
                        class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">.</span><span
                        class="mord">.</span><span class="mord">.</span><span class="mpunct">,</span><span
                        class="mspace" style="margin-right:0.16666666666666666em;"></span><span
                        class="mord mathdefault">n</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">&gt;</span></span></span></span>，那么出现的顺序 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>S</mi>
                            <mi>e</mi>
                            <mi>q</mi>
                            <mo>&lt;</mo>
                            <mn>1</mn>
                            <mo separator="true">,</mo>
                            <mn>2</mn>
                            <mo separator="true">,</mo>
                            <mn>3</mn>
                            <mo separator="true">,</mo>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mo separator="true">,</mo>
                            <mi>n</mi>
                            <mo>&gt;</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">Seq&lt;1,2,3,...,n&gt;</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.8777699999999999em;vertical-align:-0.19444em;"></span><span
                        class="mord mathdefault" style="margin-right:0.05764em;">S</span><span
                        class="mord mathdefault">e</span><span class="mord mathdefault"
                        style="margin-right:0.03588em;">q</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">&lt;</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.8388800000000001em;vertical-align:-0.19444em;"></span><span
                        class="mord">1</span><span class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">2</span><span
                        class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">3</span><span
                        class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">.</span><span
                        class="mord">.</span><span class="mord">.</span><span class="mpunct">,</span><span
                        class="mspace" style="margin-right:0.16666666666666666em;"></span><span
                        class="mord mathdefault">n</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">&gt;</span></span></span></span> 就是 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>R</mi>
                            <mi>a</mi>
                            <mi>n</mi>
                            <mi>k</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">Rank</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault"
                        style="margin-right:0.00773em;">R</span><span class="mord mathdefault">a</span><span
                        class="mord mathdefault">n</span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span></span></span></span> 的一个排列。一共有 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                            <mo stretchy="false">!</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">n!</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault">n</span><span
                        class="mclose">!</span></span></span></span>
        种排列，每个排列出现的概率就是 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mi>n</mi>
                            <mo stretchy="false">!</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">1/n!</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span class="mord mathdefault">n</span><span
                        class="mclose">!</span></span></span></span> 。</p>
    <p>《导论》里用导论<em>指示随机变量</em> 来描述这个概率问题，这里不搞这么复杂，用易懂的方式来分析一下。</p>
    <p>分析第 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.65952em;vertical-align:0em;"></span><span
                        class="mord mathdefault">i</span></span></span></span> 次面试的情况，面试顺序为 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>S</mi>
                            <mi>e</mi>
                            <mi>q</mi>
                            <mo>&lt;</mo>
                            <mn>1</mn>
                            <mo separator="true">,</mo>
                            <mn>2</mn>
                            <mo separator="true">,</mo>
                            <mn>3</mn>
                            <mo separator="true">,</mo>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mo separator="true">,</mo>
                            <mi>i</mi>
                            <mo>&gt;</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">Seq&lt;1,2,3,...,i&gt;</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.8777699999999999em;vertical-align:-0.19444em;"></span><span
                        class="mord mathdefault" style="margin-right:0.05764em;">S</span><span
                        class="mord mathdefault">e</span><span class="mord mathdefault"
                        style="margin-right:0.03588em;">q</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">&lt;</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.85396em;vertical-align:-0.19444em;"></span><span
                        class="mord">1</span><span class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">2</span><span
                        class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">3</span><span
                        class="mpunct">,</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord">.</span><span
                        class="mord">.</span><span class="mord">.</span><span class="mpunct">,</span><span
                        class="mspace" style="margin-right:0.16666666666666666em;"></span><span
                        class="mord mathdefault">i</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">&gt;</span></span></span></span>，因为顺序是完全随机的，所以每个候选人能力是最强的概率为 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">1/i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span class="mord mathdefault">i</span></span></span></span>，所以 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.65952em;vertical-align:0em;"></span><span
                        class="mord mathdefault">i</span></span></span></span> 号候选人会被雇用的概率 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>P</mi>
                                <mi>i</mi>
                            </msub>
                            <mo>=</mo>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">P_i = 1/i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.31166399999999994em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight">i</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">=</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span
                        class="mord mathdefault">i</span></span></span></span>。总的雇用次数可以用数学期望来描述：</p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <msub>
                                    <mi>E</mi>
                                    <mi>s</mi>
                                </msub>
                                <mo>=</mo>
                                <munderover>
                                    <mo>∑</mo>
                                    <mrow>
                                        <mi>i</mi>
                                        <mo>=</mo>
                                        <mn>1</mn>
                                    </mrow>
                                    <mi>n</mi>
                                </munderover>
                                <msub>
                                    <mi>E</mi>
                                    <mi>i</mi>
                                </msub>
                                <mo>=</mo>
                                <mspace linebreak="newline"></mspace>
                                <munderover>
                                    <mo>∑</mo>
                                    <mrow>
                                        <mi>i</mi>
                                        <mo>=</mo>
                                        <mn>1</mn>
                                    </mrow>
                                    <mi>n</mi>
                                </munderover>
                                <mrow>
                                    <mn>1</mn>
                                    <mo>×</mo>
                                    <msub>
                                        <mi>P</mi>
                                        <mi>i</mi>
                                    </msub>
                                    <mo>+</mo>
                                    <mn>0</mn>
                                    <mo>×</mo>
                                    <mo stretchy="false">(</mo>
                                    <mn>1</mn>
                                    <mo>−</mo>
                                    <msub>
                                        <mi>P</mi>
                                        <mi>i</mi>
                                    </msub>
                                    <mo stretchy="false">)</mo>
                                </mrow>
                                <mo>=</mo>
                                <mn>1</mn>
                                <mo>+</mo>
                                <mfrac>
                                    <mn>1</mn>
                                    <mi>n</mi>
                                </mfrac>
                                <mspace linebreak="newline"></mspace>
                                <mo>=</mo>
                                <mn>1</mn>
                                <mo>+</mo>
                                <mi>O</mi>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo stretchy="false">)</mo>
                            </mrow>
                            <annotation encoding="application/x-tex">E_s = \sum_{i=1}^{n} E_i = \\
                                \sum_{i=1}^{n} {1\times P_i + 0 \times (1 - P_i)} = 1 + \frac{1}{n} \\
                                = 1 + O(1)
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                                class="mord mathdefault" style="margin-right:0.05764em;">E</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.151392em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.05764em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">s</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                            class="mrel">=</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                            class="strut" style="height:2.929066em;vertical-align:-1.277669em;"></span><span
                            class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span
                                        class="vlist" style="height:1.6513970000000002em;"><span
                                            style="top:-1.872331em;margin-left:0em;"><span class="pstrut"
                                                style="height:3.05em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span
                                                        class="mord mathdefault mtight">i</span><span
                                                        class="mrel mtight">=</span><span
                                                        class="mord mtight">1</span></span></span></span><span
                                            style="top:-3.050005em;"><span class="pstrut"
                                                style="height:3.05em;"></span><span><span
                                                    class="mop op-symbol large-op">∑</span></span></span><span
                                            style="top:-4.3000050000000005em;margin-left:0em;"><span class="pstrut"
                                                style="height:3.05em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span
                                                        class="mord mathdefault mtight">n</span></span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:1.277669em;"><span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord"><span
                                class="mord mathdefault" style="margin-right:0.05764em;">E</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.31166399999999994em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.05764em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">i</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                            class="mrel">=</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span
                        class="mspace newline"></span><span class="base"><span class="strut"
                            style="height:2.929066em;vertical-align:-1.277669em;"></span><span
                            class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span
                                        class="vlist" style="height:1.6513970000000002em;"><span
                                            style="top:-1.872331em;margin-left:0em;"><span class="pstrut"
                                                style="height:3.05em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span
                                                        class="mord mathdefault mtight">i</span><span
                                                        class="mrel mtight">=</span><span
                                                        class="mord mtight">1</span></span></span></span><span
                                            style="top:-3.050005em;"><span class="pstrut"
                                                style="height:3.05em;"></span><span><span
                                                    class="mop op-symbol large-op">∑</span></span></span><span
                                            style="top:-4.3000050000000005em;margin-left:0em;"><span class="pstrut"
                                                style="height:3.05em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span
                                                        class="mord mathdefault mtight">n</span></span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:1.277669em;"><span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord"><span
                                class="mord">1</span><span class="mspace"
                                style="margin-right:0.2222222222222222em;"></span><span class="mbin">×</span><span
                                class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                                class="mord"><span class="mord mathdefault"
                                    style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                        class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                                style="height:0.31166399999999994em;"><span
                                                    style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                        class="pstrut" style="height:2.7em;"></span><span
                                                        class="sizing reset-size6 size3 mtight"><span
                                                            class="mord mathdefault mtight">i</span></span></span></span><span
                                                class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                                style="height:0.15em;"><span></span></span></span></span></span></span><span
                                class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                                class="mbin">+</span><span class="mspace"
                                style="margin-right:0.2222222222222222em;"></span><span class="mord">0</span><span
                                class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                                class="mbin">×</span><span class="mspace"
                                style="margin-right:0.2222222222222222em;"></span><span class="mopen">(</span><span
                                class="mord">1</span><span class="mspace"
                                style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span
                                class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                                class="mord"><span class="mord mathdefault"
                                    style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                        class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                                style="height:0.31166399999999994em;"><span
                                                    style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                        class="pstrut" style="height:2.7em;"></span><span
                                                        class="sizing reset-size6 size3 mtight"><span
                                                            class="mord mathdefault mtight">i</span></span></span></span><span
                                                class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                                style="height:0.15em;"><span></span></span></span></span></span></span><span
                                class="mclose">)</span></span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut"
                            style="height:0.72777em;vertical-align:-0.08333em;"></span><span class="mord">1</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                            class="mbin">+</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                            class="strut" style="height:2.00744em;vertical-align:-0.686em;"></span><span
                            class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.32144em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord">1</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span
                        class="mspace newline"></span><span class="base"><span class="strut"
                            style="height:0.36687em;vertical-align:0em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut"
                            style="height:0.72777em;vertical-align:-0.08333em;"></span><span class="mord">1</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                            class="mbin">+</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                            class="strut" style="height:1em;vertical-align:-0.25em;"></span><span
                            class="mord mathdefault" style="margin-right:0.02778em;">O</span><span
                            class="mopen">(</span><span class="mord">1</span><span
                            class="mclose">)</span></span></span></span></span></p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <mi>S</mi>
                                <mo>=</mo>
                                <mo stretchy="false">(</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>t</mi>
                                </msub>
                                <mo>+</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>h</mi>
                                </msub>
                                <mo stretchy="false">)</mo>
                                <mi>n</mi>
                            </mrow>
                            <annotation encoding="application/x-tex">S = (C_t + C_h)n
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault"
                            style="margin-right:0.05764em;">S</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span
                            class="mopen">(</span><span class="mord"><span class="mord mathdefault"
                                style="margin-right:0.07153em;">C</span><span class="msupsub"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.2805559999999999em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">t</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                            class="mbin">+</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                            class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span
                                class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.33610799999999996em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">h</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mclose">)</span><span class="mord mathdefault">n</span></span></span></span></span>
    </p>
    <p>后面这个式子是一个<em>调和级数</em>，结果可以用 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>f</mi>
                            <mo stretchy="false">(</mo>
                            <mi>x</mi>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mi>x</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">f(x)=1/x</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault"
                        style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span
                        class="mord mathdefault">x</span><span class="mclose">)</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span class="mord mathdefault">x</span></span></span></span>
        的定积分来分析，这里不赘述。总之雇用次数是对数级别的，总花费可估计为：
    </p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <mi>S</mi>
                                <mo>=</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>t</mi>
                                </msub>
                                <mi>n</mi>
                                <mo>+</mo>
                                <msub>
                                    <mi>C</mi>
                                    <mi>h</mi>
                                </msub>
                                <mi>lg</mi>
                                <mo>⁡</mo>
                                <mi>n</mi>
                                <mo>+</mo>
                                <mstyle mathcolor="#cc0000">
                                    <mtext>\O</mtext>
                                </mstyle>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo stretchy="false">)</mo>
                            </mrow>
                            <annotation encoding="application/x-tex">S = C_t n + C_h \lg n + \O(1)
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathdefault"
                            style="margin-right:0.05764em;">S</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:0.83333em;vertical-align:-0.15em;"></span><span
                            class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.2805559999999999em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">t</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mord mathdefault">n</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut"
                            style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span
                            class="mord"><span class="mord mathdefault" style="margin-right:0.07153em;">C</span><span
                                class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:0.33610799999999996em;"><span
                                                style="top:-2.5500000000000003em;margin-left:-0.07153em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mathdefault mtight">h</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.15em;"><span></span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mop">l<span
                                style="margin-right:0.01389em;">g</span></span><span class="mspace"
                            style="margin-right:0.16666666666666666em;"></span><span
                            class="mord mathdefault">n</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span
                            class="mord text" style="color:#cc0000;"><span class="mord"
                                style="color:#cc0000;">\O</span></span><span class="mopen">(</span><span
                            class="mord">1</span><span class="mclose">)</span></span></span></span></span></p>
    <h2>随机化算法</h2>
    <p>前面计算的平均情况是假设候选人分布是均匀的，或者说这是一个<strong>统计意义</strong>上的情况。对于真实情况来讲，总花费是依赖于输入顺序，而输入顺序往往不是那么均匀。为了避免出现最坏情况，使结果达到平均情况，就可以使用随机化算法。
    </p>
    <p>随机化算法就是先将输入的顺序打乱，使之变成均匀随机分布的，这样算法就不依赖于输入的顺序，从而达到期望的情况。也就是我们去掉了假设，制作了随机。下面介绍两种随机化算法：<strong>优先级数组</strong>和<strong>洗牌算法</strong>。
    </p>
    <h3>优先级数组</h3>
    <p>对数组中的每个元素 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>A</mi>
                            <mo stretchy="false">[</mo>
                            <mi>i</mi>
                            <mo stretchy="false">]</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">A[i]</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">A</span><span
                        class="mopen">[</span><span class="mord mathdefault">i</span><span
                        class="mclose">]</span></span></span></span>
        生成一个随机的优先级 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>P</mi>
                            <mo stretchy="false">[</mo>
                            <mi>i</mi>
                            <mo stretchy="false">]</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">P[i]</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault"
                        style="margin-right:0.13889em;">P</span><span class="mopen">[</span><span
                        class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>，在排序算法中比较
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>P</mi>
                            <mo stretchy="false">[</mo>
                            <mi>i</mi>
                            <mo stretchy="false">]</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">P[i]</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault"
                        style="margin-right:0.13889em;">P</span><span class="mopen">[</span><span
                        class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span> 的大小而不是
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>A</mi>
                            <mo stretchy="false">[</mo>
                            <mi>i</mi>
                            <mo stretchy="false">]</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">A[i]</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">A</span><span
                        class="mopen">[</span><span class="mord mathdefault">i</span><span
                        class="mclose">]</span></span></span></span>
        ，这样产生的序列就跟 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>A</mi>
                            <mo stretchy="false">[</mo>
                            <mi>i</mi>
                            <mo stretchy="false">]</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">A[i]</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">A</span><span
                        class="mopen">[</span><span class="mord mathdefault">i</span><span
                        class="mclose">]</span></span></span></span>
        的大小无关，而且是完全随机的。</p>
    <p>问题的关键在于随机生成优先级 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>P</mi>
                            <mo stretchy="false">[</mo>
                            <mi>i</mi>
                            <mo stretchy="false">]</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">P[i]</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault"
                        style="margin-right:0.13889em;">P</span><span class="mopen">[</span><span
                        class="mord mathdefault">i</span><span
                        class="mclose">]</span></span></span></span>，我们要比较大小，就不能出现相同的优先级，这个时候 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>P</mi>
                            <mo stretchy="false">[</mo>
                            <mi>i</mi>
                            <mo stretchy="false">]</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">P[i]</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault"
                        style="margin-right:0.13889em;">P</span><span class="mopen">[</span><span
                        class="mord mathdefault">i</span><span class="mclose">]</span></span></span></span>
        的随机数范围就要足够大才不会碰撞。而范围越大，生成随机数的时间复杂度也越高。</p>
    <p>通常对于 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">n</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span
                        class="mord mathdefault">n</span></span></span></span> 个元素的数组，选定的随机范围是 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>1</mn>
                            <mo>∼</mo>
                            <msup>
                                <mi>n</mi>
                                <mn>3</mn>
                            </msup>
                        </mrow>
                        <annotation encoding="application/x-tex">1 \sim n^3</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.64444em;vertical-align:0em;"></span><span class="mord">1</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">∼</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:0.8141079999999999em;vertical-align:0em;"></span><span class="mord"><span
                            class="mord mathdefault">n</span><span class="msupsub"><span class="vlist-t"><span
                                    class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span
                                            style="top:-3.063em;margin-right:0.05em;"><span class="pstrut"
                                                style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span>
        ，这个时候所有元素都唯一的概率是 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>1</mn>
                            <mo>−</mo>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mi>n</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">1 - 1/n</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.72777em;vertical-align:-0.08333em;"></span><span class="mord">1</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                        class="mbin">−</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span class="mord mathdefault">n</span></span></span></span>（记住结论吧，证明我也不会）。
    </p>
    <p>构造一个与原数组等长的优先级数组 <code>p[]</code>，然后用排序算法排序，按优先级数组大小排序的同时将原数组也排序。</p>
    <pre><code class="language-c++"><span class="hljs-comment">// 优先级数组随机化算法</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;iostream&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;ctime&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;cstdlib&gt;</span></span>

<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">quick_sort</span><span class="hljs-params">(<span class="hljs-keyword">int</span> *al, <span class="hljs-keyword">int</span> *ar, <span class="hljs-keyword">int</span> *pl, <span class="hljs-keyword">int</span> *pr)</span></span>;

<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">permute_by_sort</span><span class="hljs-params">(<span class="hljs-keyword">int</span> <span class="hljs-built_in">list</span>[], <span class="hljs-keyword">int</span> len)</span> </span>{
<span class="hljs-keyword">int</span> p[len];
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; len; i++) {
    p[i] = rand() % (len*len*len) + <span class="hljs-number">1</span>;
}
quick_sort(<span class="hljs-built_in">list</span>, <span class="hljs-built_in">list</span> + len, p, p + len);
}

<span class="hljs-comment">// [al, ar)</span>
<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">quick_sort</span><span class="hljs-params">(<span class="hljs-keyword">int</span> *al, <span class="hljs-keyword">int</span> *ar, <span class="hljs-keyword">int</span> *pl, <span class="hljs-keyword">int</span> *pr)</span> </span>{
<span class="hljs-keyword">int</span> len = ar -al;
<span class="hljs-keyword">if</span> (len &lt;= <span class="hljs-number">1</span>) {
    <span class="hljs-keyword">return</span>;
} <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">int</span> pt = *pl, at = *al;
    <span class="hljs-keyword">int</span> *aleft = al, *aright = ar - <span class="hljs-number">1</span>, *pleft = pl, *pright = pr - <span class="hljs-number">1</span>;
    <span class="hljs-keyword">while</span>(pleft &lt; pright) {
        <span class="hljs-keyword">while</span>(pleft &lt; pright &amp;&amp; *pright &gt;= pt) {
            pright = pright - <span class="hljs-number">1</span>;
            aright = aright - <span class="hljs-number">1</span>;
        }
        <span class="hljs-keyword">if</span> (pleft &lt; pright) {
            *pleft = *(pright);
            *aleft = *(aright);
            pleft = pleft + <span class="hljs-number">1</span>;
            aleft = aleft + <span class="hljs-number">1</span>;
        }
        <span class="hljs-keyword">while</span>(pleft &lt; pright &amp;&amp; *pleft &lt;= pt) {
            pleft = pleft + <span class="hljs-number">1</span>;
            aleft = aleft + <span class="hljs-number">1</span>;
        }
        <span class="hljs-keyword">if</span> (pleft &lt; pright) {
            *(pright) = *pleft;
            *(aright) = *aleft;
            pright = pright - <span class="hljs-number">1</span>;
            aright = aright - <span class="hljs-number">1</span>;
        }
    }
    *pleft = pt;
    *aleft = at;
    quick_sort(al, aleft<span class="hljs-number">-1</span>, pl, pleft<span class="hljs-number">-1</span>);
    quick_sort(aleft+<span class="hljs-number">1</span>, ar, pleft+<span class="hljs-number">1</span>, pr);
}
}

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
srand(time(<span class="hljs-literal">NULL</span>));
<span class="hljs-keyword">int</span> <span class="hljs-built_in">list</span>[] = {<span class="hljs-number">4</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">2</span>, <span class="hljs-number">9</span>};
permute_by_sort(<span class="hljs-built_in">list</span>, <span class="hljs-number">8</span>);
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">8</span>; i++) {
    <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-built_in">list</span>[i] &lt;&lt; <span class="hljs-string">", "</span>;
}
<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}
</code></pre>
    <p>这里使用了快速排序，跟一般快速排序的不同之处在于要同时排两个数组。优先级数组变成有序，而原数组就变成了无序。</p>
    <p>对这个算法的复杂度进行分析，可以看到这里耗时的地方在于排序，快速排序的时间复杂度为 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi mathvariant="normal">Θ</mi>
                            <mo stretchy="false">(</mo>
                            <mi>n</mi>
                            <mi>lg</mi>
                            <mo>⁡</mo>
                            <mi>n</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">\Theta(n\lg n)</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Θ</span><span
                        class="mopen">(</span><span class="mord mathdefault">n</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mop">l<span
                            style="margin-right:0.01389em;">g</span></span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault">n</span><span
                        class="mclose">)</span></span></span></span>，所以总的时间复杂度也是 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi mathvariant="normal">Θ</mi>
                            <mo stretchy="false">(</mo>
                            <mi>n</mi>
                            <mi>lg</mi>
                            <mo>⁡</mo>
                            <mi>n</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">\Theta(n\lg n)</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Θ</span><span
                        class="mopen">(</span><span class="mord mathdefault">n</span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mop">l<span
                            style="margin-right:0.01389em;">g</span></span><span class="mspace"
                        style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault">n</span><span
                        class="mclose">)</span></span></span></span> 。空间复杂度为
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi mathvariant="normal">Θ</mi>
                            <mo stretchy="false">(</mo>
                            <mi>n</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">\Theta(n)</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Θ</span><span
                        class="mopen">(</span><span class="mord mathdefault">n</span><span
                        class="mclose">)</span></span></span></span>，因为需要额外长度为 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">n</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span
                        class="mord mathdefault">n</span></span></span></span> 的优先级数组。</p>
    <h3>洗牌算法</h3>
    <p>洗牌算法可以让时间复杂度达到 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi mathvariant="normal">Θ</mi>
                            <mo stretchy="false">(</mo>
                            <mi>n</mi>
                            <mo stretchy="false">)</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">\Theta(n)</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Θ</span><span
                        class="mopen">(</span><span class="mord mathdefault">n</span><span
                        class="mclose">)</span></span></span></span>，而且不需要额外的空间，在原数组上即可完成，关键是算法还非常简单，可以说是必须掌握了！</p>
    <p>遍历数组，让第 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.65952em;vertical-align:0em;"></span><span
                        class="mord mathdefault">i</span></span></span></span> 个元素与 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>i</mi>
                            <mo>∼</mo>
                            <mi>n</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">i \sim n</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.65952em;vertical-align:0em;"></span><span class="mord mathdefault">i</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">∼</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span
                        class="mord mathdefault">n</span></span></span></span> 随机一个元素交换位置，交换后 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.65952em;vertical-align:0em;"></span><span
                        class="mord mathdefault">i</span></span></span></span> 号元素的位置不再改变。</p>
    <pre><code class="language-c++"><span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">wash_card</span><span class="hljs-params">(<span class="hljs-keyword">int</span> <span class="hljs-built_in">list</span>[], <span class="hljs-keyword">int</span> len)</span> </span>{
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; len; i++) {
    <span class="hljs-keyword">int</span> j = <span class="hljs-built_in">std</span>::rand() % (len - i) + i;
    <span class="hljs-built_in">std</span>::swap(<span class="hljs-built_in">list</span>[i], <span class="hljs-built_in">list</span>[j]);
}
}
</code></pre>
    <p>这个算法可以说是简单又好用，它可以产生一个<em>均匀随机排列</em>，证明部分可以看《导论》。</p>
    <h2>概率分析</h2>
    <h3>生日悖论</h3>
    <p>生日问题： <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>k</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">k</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span></span></span></span> 个人中至少有两个人生日相同的概率是多少？</p>
    <p>这个<strong>生日悖论</strong>就是：至少要多少个人，才能使其中两人生日相同的概率达到 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>50</mn>
                            <mi mathvariant="normal">%</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">50\%</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.80556em;vertical-align:-0.05556em;"></span><span class="mord">5</span><span
                        class="mord">0</span><span class="mord">%</span></span></span></span> ？</p>
    <h4>概率论求解</h4>
    <p>这其实是一个简单的概率论问题。一年有 365 天，设样本空间 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                            <mo>=</mo>
                            <mn>365</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">n = 365</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">n</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">=</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:0.64444em;vertical-align:0em;"></span><span class="mord">3</span><span
                        class="mord">6</span><span class="mord">5</span></span></span></span>，要求 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>k</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">k</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span></span></span></span> 个人中至少两个人生日相同的概率 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>P</mi>
                                <mi>k</mi>
                            </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">P_k</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.33610799999999996em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight"
                                                    style="margin-right:0.03148em;">k</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>。对于这种“至少两个”的概率问题，我们一般从反面求解，也就是求所有人生日都不相同的概率
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mover accent="true">
                                <msub>
                                    <mi>P</mi>
                                    <mi>k</mi>
                                </msub>
                                <mo>ˉ</mo>
                            </mover>
                        </mrow>
                        <annotation encoding="application/x-tex">\bar{P_k}</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.9701099999999999em;vertical-align:-0.15em;"></span><span
                        class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                    style="height:0.8201099999999999em;"><span style="top:-3em;"><span class="pstrut"
                                            style="height:3em;"></span><span class="mord"><span class="mord"><span
                                                    class="mord mathdefault"
                                                    style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                                        class="vlist-t vlist-t2"><span class="vlist-r"><span
                                                                class="vlist"
                                                                style="height:0.33610799999999996em;"><span
                                                                    style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                                        class="pstrut"
                                                                        style="height:2.7em;"></span><span
                                                                        class="sizing reset-size6 size3 mtight"><span
                                                                            class="mord mathdefault mtight"
                                                                            style="margin-right:0.03148em;">k</span></span></span></span><span
                                                                class="vlist-s">​</span></span><span
                                                            class="vlist-r"><span class="vlist"
                                                                style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span
                                        style="top:-3.25233em;"><span class="pstrut" style="height:3em;"></span><span
                                            class="accent-body" style="left:-0.25em;">ˉ</span></span></span><span
                                    class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                    style="height:0.15em;"><span></span></span></span></span></span></span></span></span>。
    </p>
    <p>一个极端的情况，当 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>k</mi>
                            <mo>=</mo>
                            <mn>366</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">k=366</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                        class="mord">3</span><span class="mord">6</span><span class="mord">6</span></span></span></span>
        时，显然 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mover accent="true">
                                <msub>
                                    <mi>P</mi>
                                    <mi>k</mi>
                                </msub>
                                <mo>ˉ</mo>
                            </mover>
                            <mo>=</mo>
                            <mn>0</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">\bar{P_k}=0</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.9701099999999999em;vertical-align:-0.15em;"></span><span
                        class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                    style="height:0.8201099999999999em;"><span style="top:-3em;"><span class="pstrut"
                                            style="height:3em;"></span><span class="mord"><span class="mord"><span
                                                    class="mord mathdefault"
                                                    style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                                        class="vlist-t vlist-t2"><span class="vlist-r"><span
                                                                class="vlist"
                                                                style="height:0.33610799999999996em;"><span
                                                                    style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                                        class="pstrut"
                                                                        style="height:2.7em;"></span><span
                                                                        class="sizing reset-size6 size3 mtight"><span
                                                                            class="mord mathdefault mtight"
                                                                            style="margin-right:0.03148em;">k</span></span></span></span><span
                                                                class="vlist-s">​</span></span><span
                                                            class="vlist-r"><span class="vlist"
                                                                style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span
                                        style="top:-3.25233em;"><span class="pstrut" style="height:3em;"></span><span
                                            class="accent-body" style="left:-0.25em;">ˉ</span></span></span><span
                                    class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                    style="height:0.15em;"><span></span></span></span></span></span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                        class="mord">0</span></span></span></span>，肯定有相同生日的两个人。相反当 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>k</mi>
                            <mo>=</mo>
                            <mn>1</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">k=1</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                        class="mord">1</span></span></span></span> 时，<span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mover accent="true">
                                <msub>
                                    <mi>P</mi>
                                    <mi>k</mi>
                                </msub>
                                <mo>ˉ</mo>
                            </mover>
                            <mo>=</mo>
                            <mn>1</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">\bar{P_k}=1</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.9701099999999999em;vertical-align:-0.15em;"></span><span
                        class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                    style="height:0.8201099999999999em;"><span style="top:-3em;"><span class="pstrut"
                                            style="height:3em;"></span><span class="mord"><span class="mord"><span
                                                    class="mord mathdefault"
                                                    style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                                        class="vlist-t vlist-t2"><span class="vlist-r"><span
                                                                class="vlist"
                                                                style="height:0.33610799999999996em;"><span
                                                                    style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                                        class="pstrut"
                                                                        style="height:2.7em;"></span><span
                                                                        class="sizing reset-size6 size3 mtight"><span
                                                                            class="mord mathdefault mtight"
                                                                            style="margin-right:0.03148em;">k</span></span></span></span><span
                                                                class="vlist-s">​</span></span><span
                                                            class="vlist-r"><span class="vlist"
                                                                style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span
                                        style="top:-3.25233em;"><span class="pstrut" style="height:3em;"></span><span
                                            class="accent-body" style="left:-0.25em;">ˉ</span></span></span><span
                                    class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                    style="height:0.15em;"><span></span></span></span></span></span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                        class="mord">1</span></span></span></span>。</p>
    <p>如果前 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.65952em;vertical-align:0em;"></span><span
                        class="mord mathdefault">i</span></span></span></span> 个人的生日都不相同，那么第 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>i</mi>
                            <mo>+</mo>
                            <mn>1</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">i+1</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.74285em;vertical-align:-0.08333em;"></span><span
                        class="mord mathdefault">i</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                        class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                        class="mord">1</span></span></span></span> 个人的生日有 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                            <mo>−</mo>
                            <mi>i</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">n-i</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.66666em;vertical-align:-0.08333em;"></span><span
                        class="mord mathdefault">n</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                        class="strut" style="height:0.65952em;vertical-align:0em;"></span><span
                        class="mord mathdefault">i</span></span></span></span> 种选择，根据乘法原理一共可能有 <span class="katex"><span
                class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                            <mo stretchy="false">(</mo>
                            <mi>n</mi>
                            <mo>−</mo>
                            <mn>1</mn>
                            <mo stretchy="false">)</mo>
                            <mo stretchy="false">(</mo>
                            <mi>n</mi>
                            <mo>−</mo>
                            <mn>2</mn>
                            <mo stretchy="false">)</mo>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mi mathvariant="normal">.</mi>
                            <mo stretchy="false">(</mo>
                            <mi>n</mi>
                            <mo>−</mo>
                            <mi>k</mi>
                            <mo>+</mo>
                            <mn>1</mn>
                            <mo stretchy="false">)</mo>
                        </mrow>
                        <annotation encoding="application/x-tex">n(n-1)(n-2)...(n-k+1)</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">n</span><span
                        class="mopen">(</span><span class="mord mathdefault">n</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                        class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mclose">)</span><span class="mopen">(</span><span class="mord mathdefault">n</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                        class="mbin">−</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span
                        class="mclose">)</span><span class="mord">.</span><span class="mord">.</span><span
                        class="mord">.</span><span class="mopen">(</span><span class="mord mathdefault">n</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                        class="mbin">−</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut"
                        style="height:0.77777em;vertical-align:-0.08333em;"></span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span
                        class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mclose">)</span></span></span></span> 中情况。而所有可能的生日组合有
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msup>
                                <mi>n</mi>
                                <mi>k</mi>
                            </msup>
                        </mrow>
                        <annotation encoding="application/x-tex">n^k</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.849108em;vertical-align:0em;"></span><span class="mord"><span
                            class="mord mathdefault">n</span><span class="msupsub"><span class="vlist-t"><span
                                    class="vlist-r"><span class="vlist" style="height:0.849108em;"><span
                                            style="top:-3.063em;margin-right:0.05em;"><span class="pstrut"
                                                style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight"
                                                    style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span>
        种。所以</p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <mover accent="true">
                                    <msub>
                                        <mi>P</mi>
                                        <mi>k</mi>
                                    </msub>
                                    <mo>ˉ</mo>
                                </mover>
                                <mo>=</mo>
                                <mfrac>
                                    <msubsup>
                                        <mi>A</mi>
                                        <mi>n</mi>
                                        <mi>k</mi>
                                    </msubsup>
                                    <msup>
                                        <mi>n</mi>
                                        <mi>k</mi>
                                    </msup>
                                </mfrac>
                                <mo>=</mo>
                                <mfrac>
                                    <mfrac>
                                        <mrow>
                                            <mi>n</mi>
                                            <mo stretchy="false">!</mo>
                                        </mrow>
                                        <mrow>
                                            <mo stretchy="false">(</mo>
                                            <mi>n</mi>
                                            <mo>−</mo>
                                            <mi>k</mi>
                                            <mo stretchy="false">)</mo>
                                            <mo stretchy="false">!</mo>
                                        </mrow>
                                    </mfrac>
                                    <msup>
                                        <mi>n</mi>
                                        <mi>k</mi>
                                    </msup>
                                </mfrac>
                                <mspace linebreak="newline"></mspace>
                                <mo>=</mo>
                                <mfrac>
                                    <mrow>
                                        <mi>n</mi>
                                        <mo stretchy="false">(</mo>
                                        <mi>n</mi>
                                        <mo>−</mo>
                                        <mn>1</mn>
                                        <mo stretchy="false">)</mo>
                                        <mo stretchy="false">(</mo>
                                        <mi>n</mi>
                                        <mo>−</mo>
                                        <mn>2</mn>
                                        <mo stretchy="false">)</mo>
                                        <mi mathvariant="normal">.</mi>
                                        <mi mathvariant="normal">.</mi>
                                        <mi mathvariant="normal">.</mi>
                                        <mo stretchy="false">(</mo>
                                        <mi>n</mi>
                                        <mo>−</mo>
                                        <mi>k</mi>
                                        <mo>+</mo>
                                        <mn>1</mn>
                                        <mo stretchy="false">)</mo>
                                    </mrow>
                                    <msup>
                                        <mi>n</mi>
                                        <mi>k</mi>
                                    </msup>
                                </mfrac>
                                <mspace linebreak="newline"></mspace>
                                <mo>=</mo>
                                <mn>1</mn>
                                <mo>⋅</mo>
                                <mo stretchy="false">(</mo>
                                <mfrac>
                                    <mrow>
                                        <mi>n</mi>
                                        <mo>−</mo>
                                        <mn>1</mn>
                                    </mrow>
                                    <mi>n</mi>
                                </mfrac>
                                <mo stretchy="false">)</mo>
                                <mo stretchy="false">(</mo>
                                <mfrac>
                                    <mrow>
                                        <mi>n</mi>
                                        <mo>−</mo>
                                        <mn>2</mn>
                                    </mrow>
                                    <mi>n</mi>
                                </mfrac>
                                <mo stretchy="false">)</mo>
                                <mi mathvariant="normal">.</mi>
                                <mi mathvariant="normal">.</mi>
                                <mi mathvariant="normal">.</mi>
                                <mo stretchy="false">(</mo>
                                <mfrac>
                                    <mrow>
                                        <mi>n</mi>
                                        <mo>−</mo>
                                        <mi>k</mi>
                                        <mo>+</mo>
                                        <mn>1</mn>
                                    </mrow>
                                    <mi>n</mi>
                                </mfrac>
                                <mo stretchy="false">)</mo>
                                <mspace linebreak="newline"></mspace>
                                <mo>=</mo>
                                <mn>1</mn>
                                <mo>⋅</mo>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo>−</mo>
                                <mfrac>
                                    <mn>1</mn>
                                    <mi>n</mi>
                                </mfrac>
                                <mo stretchy="false">)</mo>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo>−</mo>
                                <mfrac>
                                    <mn>2</mn>
                                    <mi>n</mi>
                                </mfrac>
                                <mo stretchy="false">)</mo>
                                <mi mathvariant="normal">.</mi>
                                <mi mathvariant="normal">.</mi>
                                <mi mathvariant="normal">.</mi>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo>−</mo>
                                <mfrac>
                                    <mrow>
                                        <mi>k</mi>
                                        <mo>−</mo>
                                        <mn>1</mn>
                                    </mrow>
                                    <mi>n</mi>
                                </mfrac>
                                <mo stretchy="false">)</mo>
                                <mspace linebreak="newline"></mspace>
                                <mo>≤</mo>
                                <msup>
                                    <mi>e</mi>
                                    <mrow>
                                        <mo>−</mo>
                                        <munderover>
                                            <mo>∑</mo>
                                            <mrow>
                                                <mi>i</mi>
                                                <mo>=</mo>
                                                <mn>1</mn>
                                            </mrow>
                                            <mrow>
                                                <mi>k</mi>
                                                <mo>−</mo>
                                                <mn>1</mn>
                                            </mrow>
                                        </munderover>
                                        <mi>i</mi>
                                        <mi mathvariant="normal">/</mi>
                                        <mi>n</mi>
                                    </mrow>
                                </msup>
                                <mo>=</mo>
                                <msup>
                                    <mi>e</mi>
                                    <mrow>
                                        <mo>−</mo>
                                        <mi>k</mi>
                                        <mo stretchy="false">(</mo>
                                        <mi>k</mi>
                                        <mo>−</mo>
                                        <mn>1</mn>
                                        <mo stretchy="false">)</mo>
                                        <mi mathvariant="normal">/</mi>
                                        <mn>2</mn>
                                        <mi>n</mi>
                                    </mrow>
                                </msup>
                            </mrow>
                            <annotation encoding="application/x-tex">\bar{P_k}= \frac{A_n^k}{n^k} =
                                \frac{\frac{n!}{(n-k)!}}{n^k} \\
                                = \frac{n(n-1)(n-2)...(n-k+1)}{n^k} \\
                                = 1\cdot(\frac{n-1}{n})(\frac{n-2}{n})...(\frac{n-k+1}{n}) \\
                                = 1\cdot(1-\frac{1}{n})(1-\frac{2}{n})...(1-\frac{k-1}{n}) \\
                                \le e^{-\sum_{i=1}^{k-1}i/n} = e^{-k(k-1)/2n}
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.9701099999999999em;vertical-align:-0.15em;"></span><span
                            class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.8201099999999999em;"><span style="top:-3em;"><span
                                                class="pstrut" style="height:3em;"></span><span class="mord"><span
                                                    class="mord"><span class="mord mathdefault"
                                                        style="margin-right:0.13889em;">P</span><span
                                                        class="msupsub"><span class="vlist-t vlist-t2"><span
                                                                class="vlist-r"><span class="vlist"
                                                                    style="height:0.33610799999999996em;"><span
                                                                        style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                                            class="pstrut"
                                                                            style="height:2.7em;"></span><span
                                                                            class="sizing reset-size6 size3 mtight"><span
                                                                                class="mord mathdefault mtight"
                                                                                style="margin-right:0.03148em;">k</span></span></span></span><span
                                                                    class="vlist-s">​</span></span><span
                                                                class="vlist-r"><span class="vlist"
                                                                    style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span
                                            style="top:-3.25233em;"><span class="pstrut"
                                                style="height:3em;"></span><span class="accent-body"
                                                style="left:-0.25em;">ˉ</span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                            class="mrel">=</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                            class="strut" style="height:2.212108em;vertical-align:-0.686em;"></span><span
                            class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.5261080000000002em;"><span style="top:-2.314em;"><span
                                                    class="pstrut" style="height:3em;"></span><span class="mord"><span
                                                        class="mord"><span class="mord mathdefault">n</span><span
                                                            class="msupsub"><span class="vlist-t"><span
                                                                    class="vlist-r"><span class="vlist"
                                                                        style="height:0.7751079999999999em;"><span
                                                                            style="top:-2.9890000000000003em;margin-right:0.05em;"><span
                                                                                class="pstrut"
                                                                                style="height:2.7em;"></span><span
                                                                                class="sizing reset-size6 size3 mtight"><span
                                                                                    class="mord mathdefault mtight"
                                                                                    style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord"><span class="mord mathdefault">A</span><span
                                                            class="msupsub"><span class="vlist-t vlist-t2"><span
                                                                    class="vlist-r"><span class="vlist"
                                                                        style="height:0.849108em;"><span
                                                                            style="top:-2.4530000000000003em;margin-left:0em;margin-right:0.05em;"><span
                                                                                class="pstrut"
                                                                                style="height:2.7em;"></span><span
                                                                                class="sizing reset-size6 size3 mtight"><span
                                                                                    class="mord mathdefault mtight">n</span></span></span><span
                                                                            style="top:-3.063em;margin-right:0.05em;"><span
                                                                                class="pstrut"
                                                                                style="height:2.7em;"></span><span
                                                                                class="sizing reset-size6 size3 mtight"><span
                                                                                    class="mord mathdefault mtight"
                                                                                    style="margin-right:0.03148em;">k</span></span></span></span><span
                                                                        class="vlist-s">​</span></span><span
                                                                    class="vlist-r"><span class="vlist"
                                                                        style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:2.476108em;vertical-align:-0.686em;"></span><span
                            class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.790108em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord"><span class="mord mathdefault">n</span><span
                                                            class="msupsub"><span class="vlist-t"><span
                                                                    class="vlist-r"><span class="vlist"
                                                                        style="height:0.7751079999999999em;"><span
                                                                            style="top:-2.9890000000000003em;margin-right:0.05em;"><span
                                                                                class="pstrut"
                                                                                style="height:2.7em;"></span><span
                                                                                class="sizing reset-size6 size3 mtight"><span
                                                                                    class="mord mathdefault mtight"
                                                                                    style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.91em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord"><span class="mopen nulldelimiter"></span><span
                                                            class="mfrac"><span class="vlist-t vlist-t2"><span
                                                                    class="vlist-r"><span class="vlist"
                                                                        style="height:0.8801079999999999em;"><span
                                                                            style="top:-2.655em;"><span class="pstrut"
                                                                                style="height:3em;"></span><span
                                                                                class="sizing reset-size6 size3 mtight"><span
                                                                                    class="mord mtight"><span
                                                                                        class="mopen mtight">(</span><span
                                                                                        class="mord mathdefault mtight">n</span><span
                                                                                        class="mbin mtight">−</span><span
                                                                                        class="mord mathdefault mtight"
                                                                                        style="margin-right:0.03148em;">k</span><span
                                                                                        class="mclose mtight">)</span><span
                                                                                        class="mclose mtight">!</span></span></span></span><span
                                                                            style="top:-3.23em;"><span class="pstrut"
                                                                                style="height:3em;"></span><span
                                                                                class="frac-line"
                                                                                style="border-bottom-width:0.04em;"></span></span><span
                                                                            style="top:-3.394em;"><span class="pstrut"
                                                                                style="height:3em;"></span><span
                                                                                class="sizing reset-size6 size3 mtight"><span
                                                                                    class="mord mtight"><span
                                                                                        class="mord mathdefault mtight">n</span><span
                                                                                        class="mclose mtight">!</span></span></span></span></span><span
                                                                        class="vlist-s">​</span></span><span
                                                                    class="vlist-r"><span class="vlist"
                                                                        style="height:0.52em;"><span></span></span></span></span></span><span
                                                            class="mclose nulldelimiter"></span></span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span
                        class="mspace newline"></span><span class="base"><span class="strut"
                            style="height:0.36687em;vertical-align:0em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:2.113em;vertical-align:-0.686em;"></span><span
                            class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord"><span class="mord mathdefault">n</span><span
                                                            class="msupsub"><span class="vlist-t"><span
                                                                    class="vlist-r"><span class="vlist"
                                                                        style="height:0.7751079999999999em;"><span
                                                                            style="top:-2.9890000000000003em;margin-right:0.05em;"><span
                                                                                class="pstrut"
                                                                                style="height:2.7em;"></span><span
                                                                                class="sizing reset-size6 size3 mtight"><span
                                                                                    class="mord mathdefault mtight"
                                                                                    style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span><span
                                                        class="mopen">(</span><span
                                                        class="mord mathdefault">n</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">−</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord">1</span><span class="mclose">)</span><span
                                                        class="mopen">(</span><span
                                                        class="mord mathdefault">n</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">−</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord">2</span><span class="mclose">)</span><span
                                                        class="mord">.</span><span class="mord">.</span><span
                                                        class="mord">.</span><span class="mopen">(</span><span
                                                        class="mord mathdefault">n</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">−</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord mathdefault"
                                                        style="margin-right:0.03148em;">k</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">+</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord">1</span><span
                                                        class="mclose">)</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span
                        class="mspace newline"></span><span class="base"><span class="strut"
                            style="height:0.36687em;vertical-align:0em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                            class="mord">1</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">⋅</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:2.05744em;vertical-align:-0.686em;"></span><span
                            class="mopen">(</span><span class="mord"><span class="mopen nulldelimiter"></span><span
                                class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.32144em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">−</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord">1</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span
                            class="mopen">(</span><span class="mord"><span class="mopen nulldelimiter"></span><span
                                class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.32144em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">−</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord">2</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span
                            class="mord">.</span><span class="mord">.</span><span class="mord">.</span><span
                            class="mopen">(</span><span class="mord"><span class="mopen nulldelimiter"></span><span
                                class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.37144em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">−</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord mathdefault"
                                                        style="margin-right:0.03148em;">k</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">+</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord">1</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="mspace newline"></span><span class="base"><span class="strut"
                            style="height:0.36687em;vertical-align:0em;"></span><span class="mrel">=</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                            class="mord">1</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">⋅</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span
                            class="mopen">(</span><span class="mord">1</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:2.00744em;vertical-align:-0.686em;"></span><span
                            class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.32144em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord">1</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span
                            class="mopen">(</span><span class="mord">1</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:2.00744em;vertical-align:-0.686em;"></span><span
                            class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.32144em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord">2</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span
                            class="mord">.</span><span class="mord">.</span><span class="mord">.</span><span
                            class="mopen">(</span><span class="mord">1</span><span class="mspace"
                            style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span
                            class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span
                        class="base"><span class="strut" style="height:2.05744em;vertical-align:-0.686em;"></span><span
                            class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span
                                    class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                            style="height:1.37144em;"><span style="top:-2.314em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault">n</span></span></span><span
                                                style="top:-3.23em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="frac-line"
                                                    style="border-bottom-width:0.04em;"></span></span><span
                                                style="top:-3.677em;"><span class="pstrut"
                                                    style="height:3em;"></span><span class="mord"><span
                                                        class="mord mathdefault"
                                                        style="margin-right:0.03148em;">k</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mbin">−</span><span class="mspace"
                                                        style="margin-right:0.2222222222222222em;"></span><span
                                                        class="mord">1</span></span></span></span><span
                                            class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                            style="height:0.686em;"><span></span></span></span></span></span><span
                                class="mclose nulldelimiter"></span></span><span class="mclose">)</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="mspace newline"></span><span class="base"><span class="strut"
                            style="height:0.7719400000000001em;vertical-align:-0.13597em;"></span><span
                            class="mrel">≤</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                            class="strut" style="height:1.0619199999999998em;vertical-align:0em;"></span><span
                            class="mord"><span class="mord mathdefault">e</span><span class="msupsub"><span
                                    class="vlist-t"><span class="vlist-r"><span class="vlist"
                                            style="height:1.0619199999999998em;"><span
                                                style="top:-3.1130000000000004em;margin-right:0.05em;"><span
                                                    class="pstrut" style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mtight"><span class="mord mtight">−</span><span
                                                            class="mspace mtight"
                                                            style="margin-right:0.19516666666666668em;"></span><span
                                                            class="mop mtight"><span
                                                                class="mop op-symbol small-op mtight"
                                                                style="position:relative;top:-0.0000050000000000050004em;">∑</span><span
                                                                class="msupsub"><span class="vlist-t vlist-t2"><span
                                                                        class="vlist-r"><span class="vlist"
                                                                            style="height:0.9270285714285714em;"><span
                                                                                style="top:-2.1785614285714283em;margin-left:0em;margin-right:0.07142857142857144em;"><span
                                                                                    class="pstrut"
                                                                                    style="height:2.5em;"></span><span
                                                                                    class="sizing reset-size3 size1 mtight"><span
                                                                                        class="mord mtight"><span
                                                                                            class="mord mathdefault mtight">i</span><span
                                                                                            class="mrel mtight">=</span><span
                                                                                            class="mord mtight">1</span></span></span></span><span
                                                                                style="top:-2.931em;margin-right:0.07142857142857144em;"><span
                                                                                    class="pstrut"
                                                                                    style="height:2.5em;"></span><span
                                                                                    class="sizing reset-size3 size1 mtight"><span
                                                                                        class="mord mtight"><span
                                                                                            class="mord mathdefault mtight"
                                                                                            style="margin-right:0.03148em;">k</span><span
                                                                                            class="mbin mtight">−</span><span
                                                                                            class="mord mtight">1</span></span></span></span></span><span
                                                                            class="vlist-s">​</span></span><span
                                                                        class="vlist-r"><span class="vlist"
                                                                            style="height:0.32143857142857146em;"><span></span></span></span></span></span></span><span
                                                            class="mspace mtight"
                                                            style="margin-right:0.19516666666666668em;"></span><span
                                                            class="mord mathdefault mtight">i</span><span
                                                            class="mord mtight">/</span><span
                                                            class="mord mathdefault mtight">n</span></span></span></span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                            class="mrel">=</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                            class="strut" style="height:0.938em;vertical-align:0em;"></span><span class="mord"><span
                                class="mord mathdefault">e</span><span class="msupsub"><span class="vlist-t"><span
                                        class="vlist-r"><span class="vlist" style="height:0.938em;"><span
                                                style="top:-3.113em;margin-right:0.05em;"><span class="pstrut"
                                                    style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mtight"><span class="mord mtight">−</span><span
                                                            class="mord mathdefault mtight"
                                                            style="margin-right:0.03148em;">k</span><span
                                                            class="mopen mtight">(</span><span
                                                            class="mord mathdefault mtight"
                                                            style="margin-right:0.03148em;">k</span><span
                                                            class="mbin mtight">−</span><span
                                                            class="mord mtight">1</span><span
                                                            class="mclose mtight">)</span><span
                                                            class="mord mtight">/</span><span
                                                            class="mord mtight">2</span><span
                                                            class="mord mathdefault mtight">n</span></span></span></span></span></span></span></span></span></span></span></span></span>
    </p>
    <p>最后这个不等式是根据<em>伯努利不等式</em> <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>1</mn>
                            <mo>+</mo>
                            <mi>x</mi>
                            <mo>≤</mo>
                            <msup>
                                <mi>e</mi>
                                <mi>x</mi>
                            </msup>
                        </mrow>
                        <annotation encoding="application/x-tex">1+x\le e^x</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.72777em;vertical-align:-0.08333em;"></span><span class="mord">1</span><span
                        class="mspace" style="margin-right:0.2222222222222222em;"></span><span
                        class="mbin">+</span><span class="mspace"
                        style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut"
                        style="height:0.7719400000000001em;vertical-align:-0.13597em;"></span><span
                        class="mord mathdefault">x</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">≤</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.664392em;vertical-align:0em;"></span><span class="mord"><span
                            class="mord mathdefault">e</span><span class="msupsub"><span class="vlist-t"><span
                                    class="vlist-r"><span class="vlist" style="height:0.664392em;"><span
                                            style="top:-3.063em;margin-right:0.05em;"><span class="pstrut"
                                                style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight">x</span></span></span></span></span></span></span></span></span></span></span>
        得出的，这里不给证明。</p>
    <p>要求<strong>生日悖论</strong>的 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>P</mi>
                                <mi>k</mi>
                            </msub>
                            <mo>≥</mo>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mn>2</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">P_k \ge 1/2</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.33610799999999996em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight"
                                                    style="margin-right:0.03148em;">k</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">≥</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span class="mord">2</span></span></span></span>，即 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mover accent="true">
                                <msub>
                                    <mi>P</mi>
                                    <mi>k</mi>
                                </msub>
                                <mo>ˉ</mo>
                            </mover>
                            <mo>&lt;</mo>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mn>2</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">\bar{P_k} \lt 1/2</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.9701099999999999em;vertical-align:-0.15em;"></span><span
                        class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                    style="height:0.8201099999999999em;"><span style="top:-3em;"><span class="pstrut"
                                            style="height:3em;"></span><span class="mord"><span class="mord"><span
                                                    class="mord mathdefault"
                                                    style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                                        class="vlist-t vlist-t2"><span class="vlist-r"><span
                                                                class="vlist"
                                                                style="height:0.33610799999999996em;"><span
                                                                    style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                                        class="pstrut"
                                                                        style="height:2.7em;"></span><span
                                                                        class="sizing reset-size6 size3 mtight"><span
                                                                            class="mord mathdefault mtight"
                                                                            style="margin-right:0.03148em;">k</span></span></span></span><span
                                                                class="vlist-s">​</span></span><span
                                                            class="vlist-r"><span class="vlist"
                                                                style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span
                                        style="top:-3.25233em;"><span class="pstrut" style="height:3em;"></span><span
                                            class="accent-body" style="left:-0.25em;">ˉ</span></span></span><span
                                    class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                    style="height:0.15em;"><span></span></span></span></span></span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">&lt;</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span class="mord">2</span></span></span></span>，把 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>n</mi>
                            <mo>=</mo>
                            <mn>365</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">n = 365</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">n</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">=</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:0.64444em;vertical-align:0em;"></span><span class="mord">3</span><span
                        class="mord">6</span><span class="mord">5</span></span></span></span> 代入可得：</p>
    <p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math>
                        <semantics>
                            <mrow>
                                <mover accent="true">
                                    <msub>
                                        <mi>P</mi>
                                        <mi>k</mi>
                                    </msub>
                                    <mo>ˉ</mo>
                                </mover>
                                <mo>≤</mo>
                                <msup>
                                    <mi>e</mi>
                                    <mrow>
                                        <mo>−</mo>
                                        <mi>k</mi>
                                        <mo stretchy="false">(</mo>
                                        <mi>k</mi>
                                        <mo>−</mo>
                                        <mn>1</mn>
                                        <mo stretchy="false">)</mo>
                                        <mi mathvariant="normal">/</mi>
                                        <mn>2</mn>
                                        <mi>n</mi>
                                    </mrow>
                                </msup>
                                <mo>=</mo>
                                <mn>1</mn>
                                <mi mathvariant="normal">/</mi>
                                <mn>2</mn>
                                <mspace linebreak="newline"></mspace>
                                <mo>⇒</mo>
                                <mi>k</mi>
                                <mo>≥</mo>
                                <mn>23</mn>
                            </mrow>
                            <annotation encoding="application/x-tex">\bar{P_k} \le e^{-k(k-1)/2n} = 1/2 \\
                                \Rightarrow k \ge 23
                            </annotation>
                        </semantics>
                    </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                            style="height:0.9701099999999999em;vertical-align:-0.15em;"></span><span
                            class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.8201099999999999em;"><span style="top:-3em;"><span
                                                class="pstrut" style="height:3em;"></span><span class="mord"><span
                                                    class="mord"><span class="mord mathdefault"
                                                        style="margin-right:0.13889em;">P</span><span
                                                        class="msupsub"><span class="vlist-t vlist-t2"><span
                                                                class="vlist-r"><span class="vlist"
                                                                    style="height:0.33610799999999996em;"><span
                                                                        style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                                            class="pstrut"
                                                                            style="height:2.7em;"></span><span
                                                                            class="sizing reset-size6 size3 mtight"><span
                                                                                class="mord mathdefault mtight"
                                                                                style="margin-right:0.03148em;">k</span></span></span></span><span
                                                                    class="vlist-s">​</span></span><span
                                                                class="vlist-r"><span class="vlist"
                                                                    style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span
                                            style="top:-3.25233em;"><span class="pstrut"
                                                style="height:3em;"></span><span class="accent-body"
                                                style="left:-0.25em;">ˉ</span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                            class="mrel">≤</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                            class="strut" style="height:0.938em;vertical-align:0em;"></span><span class="mord"><span
                                class="mord mathdefault">e</span><span class="msupsub"><span class="vlist-t"><span
                                        class="vlist-r"><span class="vlist" style="height:0.938em;"><span
                                                style="top:-3.113em;margin-right:0.05em;"><span class="pstrut"
                                                    style="height:2.7em;"></span><span
                                                    class="sizing reset-size6 size3 mtight"><span
                                                        class="mord mtight"><span class="mord mtight">−</span><span
                                                            class="mord mathdefault mtight"
                                                            style="margin-right:0.03148em;">k</span><span
                                                            class="mopen mtight">(</span><span
                                                            class="mord mathdefault mtight"
                                                            style="margin-right:0.03148em;">k</span><span
                                                            class="mbin mtight">−</span><span
                                                            class="mord mtight">1</span><span
                                                            class="mclose mtight">)</span><span
                                                            class="mord mtight">/</span><span
                                                            class="mord mtight">2</span><span
                                                            class="mord mathdefault mtight">n</span></span></span></span></span></span></span></span></span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                            class="mrel">=</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                            class="strut" style="height:1em;vertical-align:-0.25em;"></span><span
                            class="mord">1</span><span class="mord">/</span><span class="mord">2</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="mspace newline"></span><span class="base"><span class="strut"
                            style="height:0.36687em;vertical-align:0em;"></span><span class="mrel">⇒</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut"
                            style="height:0.83041em;vertical-align:-0.13597em;"></span><span class="mord mathdefault"
                            style="margin-right:0.03148em;">k</span><span class="mspace"
                            style="margin-right:0.2777777777777778em;"></span><span class="mrel">≥</span><span
                            class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span
                        class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                            class="mord">2</span><span class="mord">3</span></span></span></span></span></p>
    <p>也就是说，如果 23 个人在一间屋子里，那么至少两个人同一天生日的概率超过 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>1</mn>
                            <mi mathvariant="normal">/</mi>
                            <mn>2</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">1/2</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span
                        class="mord">/</span><span class="mord">2</span></span></span></span>
        。我们把它叫生日悖论，是因为这个数字远比我们想象的小。</p>
    <p>如果让 <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <msub>
                                <mi>P</mi>
                                <mi>k</mi>
                            </msub>
                            <mo>≥</mo>
                            <mn>99</mn>
                            <mi mathvariant="normal">%</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">P_k \ge 99\%</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83333em;vertical-align:-0.15em;"></span><span class="mord"><span
                            class="mord mathdefault" style="margin-right:0.13889em;">P</span><span class="msupsub"><span
                                class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"
                                        style="height:0.33610799999999996em;"><span
                                            style="top:-2.5500000000000003em;margin-left:-0.13889em;margin-right:0.05em;"><span
                                                class="pstrut" style="height:2.7em;"></span><span
                                                class="sizing reset-size6 size3 mtight"><span
                                                    class="mord mathdefault mtight"
                                                    style="margin-right:0.03148em;">k</span></span></span></span><span
                                        class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"
                                        style="height:0.15em;"><span></span></span></span></span></span></span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span><span
                        class="mrel">≥</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut"
                        style="height:0.80556em;vertical-align:-0.05556em;"></span><span class="mord">9</span><span
                        class="mord">9</span><span class="mord">%</span></span></span></span>，则可以解得 <span
            class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mi>k</mi>
                            <mo>≥</mo>
                            <mn>59</mn>
                        </mrow>
                        <annotation encoding="application/x-tex">k \ge 59</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.83041em;vertical-align:-0.13597em;"></span><span class="mord mathdefault"
                        style="margin-right:0.03148em;">k</span><span class="mspace"
                        style="margin-right:0.2777777777777778em;"></span><span class="mrel">≥</span><span
                        class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span
                        class="strut" style="height:0.64444em;vertical-align:0em;"></span><span
                        class="mord">5</span><span class="mord">9</span></span></span></span>。也就是说，59 个人里出现相同生日的概率超过
        <span class="katex"><span class="katex-mathml"><math>
                    <semantics>
                        <mrow>
                            <mn>99</mn>
                            <mi mathvariant="normal">%</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">99\%</annotation>
                    </semantics>
                </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height:0.80556em;vertical-align:-0.05556em;"></span><span class="mord">9</span><span
                        class="mord">9</span><span class="mord">%</span></span></span></span>。</p>

</div>