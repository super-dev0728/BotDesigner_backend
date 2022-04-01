<?php
namespace App\Http\Controllers\Api;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class DatasetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request,$scraper_id)
    {
        if ($request->user()->is_admin) {
            return Dataset::loadAll();
        }
        return Dataset::loadAllMine($scraper_id);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(DatasetRequest $request,$scraper_id)
    {
        $user = $request->user();
        $scraper = Scraper::findOrFail($scraper_id);
        $dataset = new Dataset($request->validated());
        $scraper->outputs->save($dataset);
        return response()->json($dataset, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (!$request->user()->is_admin) {
            return Scraper::mine($request->user()->id)->findOrFail($id);
        }
        return Scraper::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param DatasetRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(DatasetRequest $request, $id)
    {
        $dataset = Dataset::findOrFail($id);
        $data = $request->validated();
        $dataset->update($data);
        return response()->json($dataset, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $dataset = Dataset::findOrFail($id);
        $dataset->delete();
        return response([], 200);
    }
}
